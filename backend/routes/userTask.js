import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { createTask } from "../controllers/todoTask.js";
import { validate } from "../middleware/validationZod.js";
import { taskValidationSchema } from "../Schema/taskSchema.js";
const router = express.Router();

/**
 * @swagger
 * /api/tasks:
 *   post:
 *     summary: Create a new task
 *     tags: [task]
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

export default router;
