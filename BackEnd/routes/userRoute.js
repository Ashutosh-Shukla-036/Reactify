import express from 'express';
import { getUser, Login, SignUp, UserUpdate } from '../Controllers/userController.js';
import { authMiddleware } from '../Middleware/authMiddleware.js';
const Route = express.Router();

Route.post('/signup',SignUp);
Route.post('/login',Login);
Route.get('/getusers',authMiddleware,getUser);
Route.get('/userupdate/:userId',authMiddleware,UserUpdate);

export default Route;