import express from 'express'
import { protect } from '../middleware/authMiddleware.js'
import { getMyTasks } from '../controllers/todoTask.js'
const router = express.Router()
/**
 * @swagger
 * /api/allTask:
 *   get:
 *     summary: Get all tasks
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/', protect, getMyTasks)

export default router