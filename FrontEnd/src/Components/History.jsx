import { useRecoilState, useRecoilValue } from "recoil";
import { userAtom } from "../Atoms/userAtom";
import { useEffect, useState } from "react";
import { history } from "../API_Calls/HistoryAPI";
import { historyAtom } from "../Atoms/HistoryAtom";

export const History = () => {
    const user = useRecoilValue(userAtom);
    const [historyList, setHistoryList] = useRecoilState(historyAtom);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setError] = useState('');
    const [page, setPage] = useState(1);
    const PageSize = 5;

    const TotalPage = Math.ceil(historyList.length/PageSize);
    const indexOfLastItem = page * PageSize;
    const indexOfFirstItem = indexOfLastItem - PageSize;

    const currentItems = historyList.slice(indexOfFirstItem, indexOfLastItem);

    const goToPage = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= TotalPage) {
            setPage(pageNumber);
        }
    }

    useEffect(() => {
        const fetchHistory = async () => {
            setIsLoading(true);
            setError('');
            try {
                console.log(user.userId);
                const historyData = await history(user.userId);
                setHistoryList(historyData);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchHistory();
    }, [user.userId, setHistoryList]);

    return (
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-800 shadow-xl rounded-lg p-8 max-w-3xl mx-auto mt-10">
            <h2 className="text-3xl font-extrabold mb-8 text-gray-800 dark:text-white text-center tracking-wide">Transaction History</h2>
            
            {isLoading ? (
                <p className="text-gray-600 dark:text-gray-300 text-center text-lg font-medium">Loading transactions...</p>
            ) : errorMessage ? (
                <p className="text-red-500 dark:text-red-400 text-center text-lg font-medium">{errorMessage}</p>
            ) : historyList.length > 0 ? (
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                    {currentItems.map((transaction, index) => (
                        <li
                            key={index}
                            className="p-6 bg-white dark:bg-gray-800 flex flex-col sm:flex-row justify-between items-start sm:items-center rounded-lg mb-4 shadow-sm hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-1"
                        >
                            <div className="flex-1 space-y-2">
                                <p className="text-gray-800 dark:text-white font-semibold">
                                    Transaction ID:{" "}
                                    <span className="text-blue-600 dark:text-blue-400 font-medium">
                                        {transaction.transactionId}
                                    </span>
                                </p>
                                <p className="text-gray-800 dark:text-white font-semibold">
                                    From:{" "}
                                    <span className="text-blue-600 dark:text-blue-400 font-medium">
                                        {transaction.senderName}
                                    </span>
                                </p>
                                <p className="text-gray-800 dark:text-white font-semibold">
                                    To:{" "}
                                    <span className="text-blue-600 dark:text-blue-400 font-medium">
                                        {transaction.receiverName}
                                    </span>
                                </p>
                                <p className="text-gray-800 dark:text-white font-semibold">
                                    Amount:{" "}
                                    <span className="text-green-600 dark:text-green-400 font-bold">
                                        ₹{transaction.amount.toFixed(2)}
                                    </span>
                                </p>
                            </div>
                            <div className="mt-4 sm:mt-0 sm:ml-8 text-right sm:text-left">
                                <p className="text-gray-600 dark:text-gray-300">
                                    Date:{" "}
                                    <span className="text-gray-800 dark:text-white font-semibold">
                                        {transaction.date}
                                    </span>
                                </p>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Time:{" "}
                                    <span className="text-gray-800 dark:text-white font-semibold">
                                        {transaction.time}
                                    </span>
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500 dark:text-gray-400 text-center text-lg">No transactions found.</p>
            )}

            {historyList.length > PageSize && (
                <div className="flex justify-center mt-6 space-x-4">
                    <button 
                        onClick={() => goToPage(1)}
                        disabled = { page === 1}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-300"
                    >
                        First
                    </button>

                    <button 
                        onClick={() => goToPage(page -1)}
                        disabled = { page === 1}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-300"
                    >
                        Previous
                    </button>

                    <span className="text-gray-800 dark:text-white font-medium mt-2">
                        Page {page} of {TotalPage}
                    </span>

                    <button 
                        onClick={() => goToPage(page + 1)}
                        disabled = { page === TotalPage}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-300"
                    >
                        Next
                    </button>

                    <button
                        onClick={() => goToPage(TotalPage)}
                        disabled = { page === TotalPage}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-300"
                    >
                        Last
                    </button>

                </div>
            )}
        </div>
    );
};
