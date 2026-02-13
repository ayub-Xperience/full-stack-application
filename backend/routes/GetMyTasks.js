import express from 'express'
import { protect } from '../middleware/authMiddleware.js'
import { getMyTasks } from '../controllers/todoTask.js'
const router = express.Router()

/**
 * @swagger
 * /api/allTask:
 *   get:
 *     summary: Get all tasks for the logged-in user
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of tasks
 */
router.get('/', protect, getMyTasks)

export default router