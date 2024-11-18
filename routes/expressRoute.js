const express = require('express');
import * as expressController from '../controllers/expressController.js'

const router = express.Router();

router.get('/express', expressController.expressController);

export default router;