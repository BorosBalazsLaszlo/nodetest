const express = require('express');
import * as homeController from '../controllers/homeController.js'

const router = express.Router();

router.get('/', homeController.homeController);

export default router;