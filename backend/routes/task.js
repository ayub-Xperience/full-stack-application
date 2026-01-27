import express from 'express'
import { getUsers, register} from '../controllers/task.js'
import { validate } from '../middleware/validationZod.js';
import { userSchema } from '../Schema/userSchema.js';
const router = express.Router()

router.post('/', validate(userSchema), register)


export default router;