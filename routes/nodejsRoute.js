const express = require('express');
import * as nodejsController from '../controllers/nodejsController.js'

const router = express.Router();

router.get('/nodejs', nodejsController.nodejsController);

export default router;