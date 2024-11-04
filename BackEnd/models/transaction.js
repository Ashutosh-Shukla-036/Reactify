import mongoose from "mongoose";
import moment from 'moment-timezone'
import z from 'zod';

const getCurrentDateIndia = () => moment.tz(Date.now(), "Asia/Kolkata").toDate();

export const validateAmount = z.object({
    amount: z.number().min(1, { message: 'Amount must be at least 1' })
});

const transactionSchema = mongoose.Schema({
    sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    amount : { type: Number, required: true },
    timestamp: { type: Date, default: getCurrentDateIndia, required: true, }
});

const Transaction = mongoose.model('Transaction', transactionSchema);

export default Transaction;