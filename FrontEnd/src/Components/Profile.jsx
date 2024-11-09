import { useRecoilValue, useSetRecoilState } from "recoil";
import { searchQueryAtom } from "../Atoms/searchQueryAtom";
import { SearchResult } from "./SearchResult";
import { userAtom } from "../Atoms/userAtom";
import { FaUserAlt, FaIdBadge, FaWallet } from "react-icons/fa";
import { FriendList } from "./FriendList";

export const Profile = () => {
    const setSearchQueryAtom = useSetRecoilState(searchQueryAtom);
    const user = useRecoilValue(userAtom);

    const handleSearch = (event) => {
        setSearchQueryAtom(event.target.value);
    };

    return (
        <>
            <h1 className="text-3xl font-extrabold mb-8 text-center text-gray-800 dark:text-white">Dashboard</h1>

            <div className="flex flex-col p-8 rounded-xl bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500 shadow-xl w-full max-w-md mx-auto text-white mb-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl font-sans">
                {/* Username and Account Section */}
                <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center w-full mb-6">
                    {/* Username Section */}
                    <div className="flex flex-col space-y-2 w-full sm:w-auto">
                        <div className="flex items-center space-x-2">
                            <FaUserAlt className="text-gray-200" />
                            <h2 className="uppercase tracking-wider text-gray-100">Username</h2>
                        </div>
                        <p className="text-xl font-semibold text-gray-50">{user.username}</p>
                    </div>

                    {/* Account Number Section */}
                    <div className="flex flex-col items-start sm:items-end space-y-2 w-full sm:w-auto">
                        <div className="flex items-center space-x-2">
                            <FaIdBadge className="text-gray-200" />
                            <p className="uppercase tracking-wider text-gray-100">Account #</p>
                        </div>
                        <p className="text-xl font-semibold text-gray-50 break-words">{user.userId}</p>
                    </div>
                </div>

                {/* Balance Section */}
                <div className="w-full mt-6">
                    <div className="flex items-center space-x-2">
                        <FaWallet className="text-gray-200" />
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-100">Balance</h3>
                    </div>
                    <p className="text-3xl font-bold text-gray-50 mt-2">₹{user.balance.toFixed(2)}</p>
                </div>
            </div>

            {/* Search Input with Hover Effect */}
            <div className="max-w-lg mx-auto px-4">
                <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-full p-3 shadow-inner transition-all duration-200 transform hover:scale-105 hover:shadow-lg mb-6">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-5 w-5 text-black dark:text-white mr-2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search Friends"
                        onChange={handleSearch}
                        className="p-2 outline-none bg-transparent w-full text-gray-700 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-400 rounded-full"
                    />
                </div>
                <SearchResult />
                <FriendList />
            </div>
        </>
    );
};