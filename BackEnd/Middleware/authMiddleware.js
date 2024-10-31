import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Token not provided, unauthorized' });
    }

    const token = authHeader.split(' ')[1];

    console.log("Token received:", token); // Debugging line

    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY); // Corrected variable name
        req.user = decoded;
        next();
    } catch (error) {
        console.error("Token verification failed:", error.message); // Log the specific error for debugging
        return res.status(401).json({ message: 'Invalid token' });
    }
};