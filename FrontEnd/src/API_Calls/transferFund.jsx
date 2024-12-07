import axios from "axios";

export const TransferAPI = async (senderId, receiverId, amount) => {
    try {
        const response = await axios.post(
            'https://reactify-i1sa.onrender.com/api/transaction/transfer',
            { senderId, receiverId, amount },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
                },
            }
        );

        // Axios automatically parses JSON responses, so we return the data directly
        return response.data;
    } catch (error) {
        // Extract and format error message
        const errorMessage = error.response?.data?.message || 'Failed to complete the transfer';
        throw new Error(errorMessage);
    }
};
