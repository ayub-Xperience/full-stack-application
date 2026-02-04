import express from 'express'
import { protect } from '../middleware/authMiddleware.js'
import { getMyTasks } from '../controllers/todoTask.js'
const router = express.Router()

router.get('/', protect, getMyTasks)

export default router