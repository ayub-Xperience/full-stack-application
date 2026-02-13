import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { createTask } from "../controllers/todoTask.js";
import { validate } from "../middleware/validationZod.js";
import { taskValidationSchema } from "../Schema/taskSchema.js";
const router = express.Router();
import { getMyTasks } from "../controllers/todoTask.js";
import { updateTask } from "../controllers/todoTask.js";

/**
 * @swagger
 * /api/allTask:
 *   get:
 *     summary: Get all tasks for the logged-in user
 *     tags: [Task]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of tasks
 */
router.get("/", protect, getMyTasks);
/**
 * @swagger
 * /api/tasks:
 *   post:
 *     summary: Create a new task
 *     tags: [Task]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [pending, in progress, completed]
 *               dueDate:
 *                 type: string
 *     responses:
 *       201:
 *         description: Task created
 */

router.post("/", protect, validate(taskValidationSchema), createTask);

/**
 * @swagger
 * /api/update/{id}:
 *   put:
 *     summary: Update a task by ID
 *     tags: [Task]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Task ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Task updated
 */
router.put("/:id", protect, validate(taskValidationSchema), updateTask);



export default router;
