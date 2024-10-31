import mongoose from "mongoose";
import User from "../models/user.js";
import Transaction from "../models/transaction.js";

export const createTransaction = async (req,res) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const { senderId, receiverId, amount } = req.body;

        const sender = await User.findOne({ senderId }).session(session);
        const receiver = await User.findOne({ receiverId }).session(session);

        if (!sender || !receiver) {
            session.abortTransaction();
            return res.status(404).json({ message: 'Sender or receiver not found.' })
        }

        if (sender.balance < amount) {
            session.abortTransaction();
            return res.status(404).json({ message: 'Insufficient balance.' })
        }

        sender.balance -= amount;
        receiver.balance += amount;

        await sender.save({ session });
        await receiver.save({ session });

        const transaction = new Transaction({
            sender: senderId,
            receiver: receiverId,
            amount
        });
        await transaction.save({ session });

        await session.commitTransaction();
        return res.status(201).json({ message: 'Transaction successful', transaction });
    } catch (error) {
        await session.abortTransaction(); 
        console.error(error);
        return res.status(500).json({ message: 'Internal server error', error });
    } finally {
        session.endSession(); 
    }
}