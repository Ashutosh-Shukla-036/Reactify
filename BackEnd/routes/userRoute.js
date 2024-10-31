import express from 'express';
import { getAllUsers, Login, SignUp } from '../Controllers/userController.js';
import { authMiddleware } from '../Middleware/authMiddleware.js';
const Route = express.Router();

Route.post('/signup',SignUp);
Route.post('/login',Login);
Route.get('/getusers',authMiddleware,getAllUsers);

export default Route;