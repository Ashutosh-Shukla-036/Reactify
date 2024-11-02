import express from 'express';
import { authMiddleware } from '../Middleware/authMiddleware.js';
import { addFriend, getFriends } from '../Controllers/friendController.js';

const Route = express.Router();

Route.get('/getfriend',authMiddleware,getFriends);
Route.post('/addfriend',authMiddleware,addFriend);

export default Route;