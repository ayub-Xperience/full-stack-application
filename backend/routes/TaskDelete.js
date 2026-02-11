import express from 'express'
import { protect } from '../middleware/authMiddleware.js'
import { validate } from '../middleware/validationZod.js'
import { deleteTask } from '../controllers/todoTask.js'
const router = express.Router()

router.delete('/:id', protect,  deleteTask  )


export default router