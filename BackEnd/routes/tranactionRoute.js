import express from 'express';
import { authMiddleware } from '../Middleware/authMiddleware.js';
import { createTransaction } from '../Controllers/transactionController.js';
const Route = express.Router();

Route.post('/tansfer',authMiddleware,createTransaction);

export default Route;