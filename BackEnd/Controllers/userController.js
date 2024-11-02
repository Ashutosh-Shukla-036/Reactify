import User, { validateUser } from "../models/user.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const SignUp = async (req, res) => {
    const ValidateData = validateUser.safeParse(req.body);

    if (!ValidateData.success) {
        return res.status(400).json({ message: ValidateData.error.errors });
    }

    const { username, password } = ValidateData.data;

    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();
        return res.status(201).json({ message: 'New user created' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: `Internal server error: ${error.message}` });
    }
};

export const Login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        if (!process.env.JWT_KEY) {
            return res.status(500).json({ message: 'JWT key is not defined in environment variables' });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_KEY, { expiresIn: '1h' });
        return res.status(200).json({ username: user.username, userId: user._id, token });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: `Internal server error: ${error.message}` });
    }
};

export const getUser = async (req, res) => {
    const { searchUser } = req.body;
    try {
        const user = await User.findOne({ username: searchUser }).select('_id username');

        if (!user) {
            return res.status(404).json({ message: 'User not found'});
        }
        return res.status(200).json(user);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: `Internal server error ${error.message}` });
    }
};
