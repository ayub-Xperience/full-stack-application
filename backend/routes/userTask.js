import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { createTask } from "../controllers/todoTask.js";
import { validate } from "../middleware/validationZod.js";
import { taskValidationSchema } from "../Schema/taskSchema.js";
const router = express.Router();


/**
 * @swagger
 */


router.post("/", protect, validate(taskValidationSchema), createTask);

export default router;
