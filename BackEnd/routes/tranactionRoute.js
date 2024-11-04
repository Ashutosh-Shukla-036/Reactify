import express from 'express';
import { authMiddleware } from '../Middleware/authMiddleware.js';
import { createTransaction, getTransactionHistory } from '../Controllers/transactionController.js';
const Route = express.Router();

Route.post('/transfer',authMiddleware,createTransaction);
Route.get('/history/:userId',authMiddleware,getTransactionHistory);

export default Route;