import mongoose from "mongoose";
import z from 'zod';

export const validateUser = z.object({
    username: z.string().min(1, { message: "username is required" }),
    password: z.string().min(6, { message: "Password should have minimum 6 characters" })
});

const UserSchema = mongoose.Schema({
    username : { type: String, required: true, unique: true },
    password: { type: String, required: true },
    balance: { type: Number, required: true, default: 0 }
});

const User = mongoose.model('User', UserSchema);

export default User;