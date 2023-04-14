import express from 'express'

import { sendOTPController, verifyOTPController } from '../controllers/otp.js'

const router = express.Router()

router.post('/sendOTP', sendOTPController)
router.post('/verifyOTP', verifyOTPController)

export default router