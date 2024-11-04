import mongoose from "mongoose";
import User from "../models/user.js";
import Transaction from "../models/transaction.js";

export const createTransaction = async (req,res) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const { senderId, receiverId, amount } = req.body;

        const sender = await User.findOne({ _id: senderId }).session(session);
        const receiver = await User.findOne({ _id: receiverId }).session(session);

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

        const responseData = {
            transactionId: transaction._id,
            sender: {
                id: sender._id,
                name: sender.username
            },
            receiver: {
                id: receiver._id,
                name: receiver.username 
            },
            amount,
        };
        return res.status(201).json({ message: 'Transaction successful', transaction: responseData });
    } catch (error) {
        await session.abortTransaction(); 
        console.error(error);
        return res.status(500).json({ message: 'Internal server error', error });
    } finally {
        session.endSession(); 
    }
}

export const getTransactionHistory = async (req, res) => {
    const userId = req.params.userId;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ message: 'Invalid user ID format.' });
    }

    try {
        const transactions = await Transaction.find({
            $or: [
                { sender: userId },
                { receiver: userId }
            ]
        })
        .populate('sender', 'username')
        .populate('receiver', 'username')
        .sort({ timestamp: -1 });

        if (transactions.length === 0) {
            return res.status(200).json({ message: 'No transactions found.' });
        }

        const formattedTransactions = transactions.map(transaction => {
            const date = new Date(transaction.timestamp);
            return {
                senderName: transaction.sender.username,
                receiverName: transaction.receiver.username,
                amount: transaction.amount,
                date: date.toISOString().split('T')[0],
                time: date.toISOString().split('T')[1].split('.')[0]
            };
        });

        return res.status(200).json(formattedTransactions);
    } catch (error) {
        console.error('Error fetching transaction history:', error);
        return res.status(500).json({ message: `Internal server error: ${error.message}` });
    }
};
