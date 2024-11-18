const express = require('express');
import * as greetingController from '../controllers/greetingController.js'

const router = express.Router()

router.get('/greeting', greetingController.greetingController);

export default router;