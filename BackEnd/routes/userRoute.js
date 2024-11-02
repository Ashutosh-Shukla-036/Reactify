import express from 'express';
import { getUser, Login, SignUp } from '../Controllers/userController.js';
import { authMiddleware } from '../Middleware/authMiddleware.js';
const Route = express.Router();

Route.post('/signup',SignUp);
Route.post('/login',Login);
Route.get('/getusers',authMiddleware,getUser);

export default Route;