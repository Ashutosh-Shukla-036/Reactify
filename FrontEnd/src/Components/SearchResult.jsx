import { useRecoilState, useRecoilValue } from "recoil";
import { searchQueryAtom } from "../Atoms/searchQueryAtom";
import { useState, useEffect, useCallback } from "react";
import debounce from 'lodash/debounce';
import { SearchFriend } from "../API_Calls/SearchFriendAPI";
import { AddFriend } from "../API_Calls/AddFriendAPI";
import { userAtom } from "../Atoms/userAtom";
import { friendListAtom } from "../Atoms/friendListAtom";
import { useNavigate } from "react-router-dom";

const DEBOUNCE_DELAY = 600;

export const SearchResult = () => {
    const navigate = useNavigate();
    const user = useRecoilValue(userAtom);
    const [friendList, setFriendList] = useRecoilState(friendListAtom);
    const [searchQuery, setSearchQuery] = useRecoilState(searchQueryAtom);
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [statusMessage, setStatusMessage] = useState("");

    const fetchResults = useCallback(
        debounce(async (query) => {
            setIsLoading(true);
            setError(null);
            try {
                const data = await SearchFriend(query);
                setResults(data && data.username ? [data] : []);
            } catch (error) {
                console.error("Error fetching search results:", error);
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        }, DEBOUNCE_DELAY),
        []
    );

    useEffect(() => {
        if (searchQuery) {
            fetchResults(searchQuery);
        } else {
            setResults([]);
        }

        return () => {
            fetchResults.cancel?.();
        };
    }, [searchQuery, fetchResults]);

    const handleAddFriend = async (friendId) => {
        try {
            const userId = user.userId;
            const data = await AddFriend(userId, friendId);
            if (data?.newFriend) {
                setFriendList((prevList) => [...prevList, data.newFriend]);
                setStatusMessage(data.message || "Friend added successfully!");
            } else {
                setStatusMessage("Failed to add friend. Please try again.");
            }
        } catch (error) {
            console.error("Error adding friend:", error);
            setStatusMessage(error.message);
        }
    };

    useEffect(() => {
        if (statusMessage) {
            const timer = setTimeout(() => setStatusMessage(""), 3000);
            return () => clearTimeout(timer);
        }
    }, [statusMessage]);

    const handleTransfer = (friendUsername) => {
        navigate(`/transfer/${friendUsername}`);
    };

    return (
        <div>
            {searchQuery ? (
                <>
                    {isLoading ? (
                        <p className="text-lg text-blue-500 dark:text-blue-300 text-center">Loading...</p>
                    ) : error ? (
                        <p className="text-red-500 dark:text-red-400 text-center text-lg">{error}</p>
                    ) : results.length > 0 && results[0]._id !== user.userId ? (
                        <ul className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-lg max-w-lg mx-auto mt-4">
                            {results.map((result) => (
                                <li
                                    key={result._id}
                                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer flex justify-between items-center"
                                >
                                    <span className="text-black dark:text-white">{result.username}</span>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleAddFriend(result._id);
                                        }}
                                        className="ml-4 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
                                    >
                                        Add Friend
                                    </button>
                                    <button
                                        className="ml-4 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
                                        onClick={() => {
                                            setSearchQuery('');
                                            handleTransfer(result.username)}
                                        }
                                    >
                                        Transfer Money
                                    </button>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-500 dark:text-gray-300 text-lg text-center">No results found</p>
                    )}
                </>
            ) : null}
            {statusMessage && (
                <p className="text-green-500 dark:text-green-400 text-center mt-2">{statusMessage}</p>
            )}
        </div>
    );
};
