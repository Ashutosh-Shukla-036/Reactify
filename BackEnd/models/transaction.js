import mongoose from "mongoose";
import z from 'zod';

export const validateAmount = z.object({
    amount: z.number().min(1, { message: 'Amount must be at least 1' })
});

const transactionSchema = mongoose.Schema({
    sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    amount : { type: Number, required: true },
    timestamp: { type: Date, default: Date.now }
});

const Transaction = mongoose.model('Transaction', transactionSchema);

export default Transaction;