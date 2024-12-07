import axios from "axios";

export const history = async (userId) => {
    try {
        const response = await axios.get(`https://reactify-i1sa.onrender.com/api/transaction/history/${userId}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
            },
        });

        // Axios automatically parses the JSON response, so we can directly return the data.
        return response.data;
    } catch (error) {
        // Handle errors
        const errorMessage = error.response?.data?.message || 'Failed to fetch transaction history';
        throw new Error(errorMessage);
    }
};
