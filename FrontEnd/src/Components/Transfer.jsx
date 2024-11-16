import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userAtom } from "../Atoms/userAtom";
import { useEffect, useState } from "react";
import { SearchFriend } from "../API_Calls/SearchFriendAPI";
import { TransferAPI } from "../API_Calls/transferFund";

export const Transfer = () => {
    const { friendUsername } = useParams();
    const [sender, setSender] = useRecoilState(userAtom);
    const [receiver, setReceiver] = useState(null);
    const [amount, setAmount] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [status, setStatus] = useState('');
    const [transactionData, setTransactionData] = useState(null);
    const [processing, setProcessing] = useState(false);

    useEffect(() => {
        const fetchReceiverDetails = async () => {
            setLoading(true);
            setError('');
            try {
                const receiverData = await SearchFriend(friendUsername);
                setReceiver(receiverData);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchReceiverDetails();
    }, [friendUsername]);

    const handleTransfer = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setStatus('');
        setProcessing(true); 

        const parsedAmount = parseFloat(amount);
        if (isNaN(parsedAmount) || parsedAmount <= 0) {
            setError("Please enter a valid amount greater than zero.");
            setLoading(false);
            setProcessing(false);
            return;
        }

        try {
            await new Promise((resolve) => setTimeout(resolve, 2000));

            const response = await TransferAPI(sender.userId, receiver._id, parsedAmount);
            setTransactionData(response.transaction);
            setStatus("success");
            setSender(prev => ({ ...prev, balance: prev.balance - parsedAmount }));
            setReceiver(prev => ({ ...prev, balance: prev.balance + parsedAmount }));
        } catch (error) {
            console.error("Transfer error:", error);
            setError(error.message);
            setStatus("error");
        } finally {
            setLoading(false);
            setProcessing(false); // Reset processing
        }
    };

    // Handle successful transaction display
    if (status === "success" && transactionData) {
        return (
            <div className="bg-green-100 p-4 sm:p-6 mx-auto rounded-lg shadow-md max-w-sm sm:max-w-md text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-3 sm:mb-4">Transaction Successful!</h2>
                <p className="text-base sm:text-lg text-green-600 mb-2">
                    Transaction ID: <strong>{transactionData.transactionId}</strong>
                </p>
                
                <div className="flex flex-col sm:flex-row sm:justify-between items-center sm:items-start mb-2 space-y-2 sm:space-y-0">
                    <p className="text-sm text-gray-600">
                        Sender: <strong>{transactionData.sender.name}</strong> (ID: {transactionData.sender.id})
                    </p>
                    <i className="fas fa-arrow-right text-green-600 hidden sm:inline-block"></i>
                    <p className="text-sm text-gray-600">
                        Receiver: <strong>{transactionData.receiver.name}</strong> (ID: {transactionData.receiver.id})
                    </p>
                </div>

                <p className="text-lg sm:text-xl font-semibold text-green-700 mb-2">
                    Amount: <span className="text-xl sm:text-2xl">₹{transactionData.amount.toFixed(2)}</span>
                </p>
            </div>
        );
    }

    // Handle error display
    if (status === "error") {
        return (
            <div className="bg-red-100 p-6 m-auto rounded shadow-md max-w-md text-center">
                <h2 className="text-2xl font-bold text-red-700 mb-4">Transaction Failed</h2>
                <p>{error}</p>
            </div>
        );
    }

    return (
        <div className="bg-gray-200 dark:bg-gray-800 p-6 m-auto max-w-md rounded shadow-md">
            {loading ? (
                <p className="text-center text-lg text-blue-500">Processing transaction...</p>
            ) : (
                <form onSubmit={handleTransfer} className="space-y-4">
                    <h2 className="text-xl font-semibold text-gray-700 text-center dark:text-white">Transfer Money</h2>
                    <div className="flex flex-col items-center space-y-2">
                        <span className="dark:text-white">From: {sender.username}</span>
                        {receiver && <span className="dark:text-white">To: {receiver.username}</span>}
                    </div>
                    <input
                        type="number"
                        placeholder="Enter Amount"
                        className="w-full p-2 rounded border border-gray-300"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        min="0.01" // Prevent entering negative values or zero
                        step="0.01" // Allow decimal values for cents
                        required 
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    >
                        {processing ? 'Processing...' : 'Transfer'}
                    </button>
                    {error && <p className="text-red-500 text-center mt-2">{error}</p>}
                </form>
            )}
        </div>
    );
};
