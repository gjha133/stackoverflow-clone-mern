import express from 'express'
import { chatbotController } from '../controllers/chatbot.js'

const router = express.Router()

router.post('/',  chatbotController)

export default router