import React, { lazy, Suspense } from "react";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { userAtom } from "../Atoms/userAtom";
import { GetFriends } from "../API_Calls/GetFriendAPI";
import { friendListAtom } from "../Atoms/friendListAtom";
import { Transfer } from "./Transfer";
import { useNavigate } from "react-router-dom";

export const FriendList = () => {
    const navigate = useNavigate();
    const [user, setUser] = useRecoilState(userAtom);
    const [friendList, setFriendList] = useRecoilState(friendListAtom);
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const TransferMoney = lazy(() => Transfer);

    useEffect(() => {
        const fetchFriends = async () => {
            setIsLoading(true);
            setErrorMessage('');
            try {
                const data = await GetFriends(user.userId);
                if (data && data.length > 0) {
                    setFriendList(data);
                } else {
                    setFriendList([]);
                    setErrorMessage("No friends found.");
                }
            } catch (error) {
                setErrorMessage("Failed to fetch friends. Please try again.");
            } finally {
                setIsLoading(false);
            }
        }
        fetchFriends();
    }, [user.userId, setFriendList]);

    const handleTransfer = (friendUsername) => {
        navigate(`/transfer/${friendUsername}`);
    };

    return (
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg rounded-xl p-8 max-w-lg mx-auto mt-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Friend List</h2>
            {isLoading ? (
                <p className="text-gray-600 text-center">Loading friends...</p>
            ) : errorMessage ? (
                <p className="text-red-500 text-center">{errorMessage}</p>
            ) : (
                <ul className="divide-y divide-gray-300">
                    {friendList.map((friend) => {
                        // Skip rendering if the friend is the logged-in user
                        if (friend.friend.username === user.username) {
                            return null;
                        }
                        return (
                            <li key={friend._id} className="p-4 bg-white flex justify-between items-center rounded-lg hover:bg-gray-50 transition duration-200 shadow-sm">
                                <span className="text-gray-800 font-medium text-lg">{friend.friend.username}</span>
                                <button 
                                    className="bg-gradient-to-r from-blue-500 to-teal-400 text-white py-2 px-4 rounded-full shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg hover:from-teal-400 hover:to-blue-500"
                                    onClick={() => handleTransfer(friend.friend.username)}
                                >
                                    Transfer Money
                                </button>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};
