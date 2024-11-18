import express from 'express'
import * as apiController from '../controllers/apiController.js';

const router = express.Router();

router.get('/api/users', apiController.getAllUsers);
router.get('/api/users/:id', apiController.getUserById);
router.post('/api/users', apiController.createUser);
router.put('/api/users/:id', apiController.updateUser);
router.delete('/api/users/:id', apiController.deleteUser);

export default router;