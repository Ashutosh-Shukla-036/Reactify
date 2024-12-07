import axios from "axios";

export const GetFriends = async (userId) => {
    try {
        const response = await axios.get(`https://reactify-i1sa.onrender.com/api/friend/getfriend/${userId}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
            },
        });

        // Axios automatically parses JSON responses
        return response.data;
    } catch (error) {
        // Axios wraps errors; use error.response to access server error details
        const errorMessage = error.response?.data?.message || 'Failed to fetch friends';
        throw new Error(errorMessage);
    }
};
