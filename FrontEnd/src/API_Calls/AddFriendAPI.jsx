import axios from "axios";

export const AddFriend = async (userId, friendId) => {
    try {
        const response = await axios.post('https://reactify-i1sa.onrender.com/api/friend/addfriend', 
            { userId, friendId }, // Request body
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        // Handle error
        const errorMessage = error.response?.data?.message || 'Failed to add friend';
        throw new Error(errorMessage);
    }
};
