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

        const exitingFriend = await FriendList.findOne({ user:userId, 'friend.userId': friendId });
        if (exitingFriend) {
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
        res.status(201).json({ message: 'Friend added successfully' });
    } catch(error) {
        console.log(error);
        return res.status(500).json({ message: `Internal server error ${error.message}`});
    }
}

export const getFriends = async ( req, res ) => {
    const userId = req.params.userId;

    try {
        const friendList = await FriendList.find({ user:userId }, 'friend');
        res.status(200).json(friendList);
    } catch(error) {
        console.log(error);
        return res.status(500).json({ message: `Internal server error ${error.message}`});
    }
}