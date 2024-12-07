import axios from "axios";

export const UpdateUser = async (userId) => {
    try {
        console.log(userId)
        const response = await axios.get(`https://reactify-i1sa.onrender.com/api/userupdate/${userId}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
            },
        });
        return response.data;
    } catch (error) {
        const errorMessage = error.response?.data?.message || 'Failed to fetch user data';
        throw new Error(errorMessage);
    }
};