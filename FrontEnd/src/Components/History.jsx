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
        }
        fetchHistory();
    }, [user.userId, setHistoryList]);

    return (
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 shadow-xl rounded-lg p-8 max-w-3xl mx-auto mt-10">
            <h2 className="text-3xl font-extrabold mb-8 text-gray-800 text-center tracking-wide">Transaction History</h2>
            
            {isLoading ? (
                <p className="text-gray-600 text-center text-lg font-medium">Loading transactions...</p>
            ) : errorMessage ? (
                <p className="text-red-500 text-center text-lg font-medium">{errorMessage}</p>
            ) : historyList.length > 0 ? (

                <ul className="divide-y divide-gray-200">
                    {historyList.map((transaction, index) => (
                        <li
                            key={index}
                            className="p-6 bg-white flex flex-col sm:flex-row justify-between items-start sm:items-center rounded-lg mb-4 shadow-sm hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-1"
                        >
                            <div className="flex-1 space-y-2">
                                <p className="text-gray-800 font-semibold">
                                    Transaction ID:{" "}
                                    <span className="text-blue-600 font-medium">
                                        {transaction.transactionId}
                                    </span>
                                </p>
                                <p className="text-gray-800 font-semibold">
                                    From:{" "}
                                    <span className="text-blue-600 font-medium">
                                        {transaction.senderName}
                                    </span>
                                </p>
                                <p className="text-gray-800 font-semibold">
                                    To:{" "}
                                    <span className="text-blue-600 font-medium">
                                        {transaction.receiverName}
                                    </span>
                                </p>
                                <p className="text-gray-800 font-semibold">
                                    Amount:{" "}
                                    <span className="text-green-600 font-bold">
                                        ₹{transaction.amount.toFixed(2)}
                                    </span>
                                </p>
                            </div>
                            <div className="mt-4 sm:mt-0 sm:ml-8 text-right sm:text-left">
                                <p className="text-gray-600">
                                    Date:{" "}
                                    <span className="text-gray-800 font-semibold">
                                        {transaction.date}
                                    </span>
                                </p>
                                <p className="text-gray-600">
                                    Time:{" "}
                                    <span className="text-gray-800 font-semibold">
                                        {transaction.time}
                                    </span>
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500 text-center text-lg">No transactions found.</p>
            )}
        </div>
    );    
};
