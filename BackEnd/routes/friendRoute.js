import express from 'express';
import { authMiddleware } from '../Middleware/authMiddleware.js';
import { addFriend, getFriends, searchFriend } from '../Controllers/friendController.js';

const Route = express.Router();

Route.get('/getfriend/:userId',authMiddleware,getFriends);
Route.post('/addfriend',authMiddleware,addFriend);
Route.get('/searchfriend/:username',authMiddleware,searchFriend);

export default Route;