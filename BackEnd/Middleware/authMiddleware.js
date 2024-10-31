import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Token not provided, unauthorized' });
    }

    const token = authHeader.split(' ')[1];

    console.log("Token received:", token); 

    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY); 
        req.user = decoded;
        next();
    } catch (error) {
        console.error("Token verification failed:", error.message); 
        return res.status(401).json({ message: 'Invalid token' });
    }
};