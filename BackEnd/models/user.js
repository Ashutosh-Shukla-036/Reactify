import mongoose from "mongoose";
import z from 'zod';

export const validateUser = z.object({
    username: z.string().min(1).max(16,{ message: "username is required. username can have maximum 16 characters." }),
    password: z.string().min(6, { message: "Password should have minimum 6 characters" })
});

const UserSchema = mongoose.Schema({
    username : { type: String, required: true, unique: true },
    password: { type: String, required: true },
    balance: { type: Number, required: true, default: 500 }
});

const User = mongoose.model('User', UserSchema);

export default User;