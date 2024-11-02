import mongoose from "mongoose";

const friendListSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref:'User', required: true },
  friend: {
    userId: { type: mongoose.Schema.Types.ObjectId, ref:'User', required: true },
    username: { type: String, required: true}
  } 
});

const FriendList = mongoose.model('friendList',friendListSchema);

export default FriendList;