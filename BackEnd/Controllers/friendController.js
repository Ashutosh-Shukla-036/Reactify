import FriendList from "../models/friendList.js";
import User from "../models/user.js";

export const addFriend = async (req, res) => {
    const { userId, friendId } = req.body;

    try {
        const user = await User.findById(userId);
        const friend = await User.findById(friendId, 'username');

        if (!user || !friend) {
            return res.status(404).json({ message: 'User or Friend not found' });
        }

        const existingFriend = await FriendList.findOne({ user: userId, 'friend.userId': friendId });
        if (existingFriend) {
            return res.status(400).json({ message: 'Friend already added' });
        }

        const newFriend = new FriendList({
            user: userId,
            friend: {
                userId: friend._id,
                username: friend.username
            }
        });

        await newFriend.save();
        res.status(201).json({ message: 'Friend added successfully',
            newFriend
         });
    } catch(error) {
        console.log(error);
        return res.status(500).json({ message: `Internal server error ${error.message}`});
    }
}

export const getFriends = async ( req, res ) => {
    const userId = req.params.userId;

    try {
        const friendList = await FriendList.find({ user:userId }, 'friend');
        return res.status(200).json(friendList);
    } catch(error) {
        console.log(error);
        return res.status(500).json({ message: `Internal server error ${error.message}`});
    }
}

export const searchFriend = async (req, res) => {
    const friendUsername = req.params.username;

    try {
        const friend = await User.findOne({ username: { $regex: new RegExp(`^${friendUsername}$`, 'i') } }).select('_id username');
        if (!friend) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(200).json(friend);
    } catch(error) {
        console.log(error);
        return res.status(500).json({ message: `Internal server error ${error.message}`});
    }
}