import axios from "axios";

export const SearchFriend = async (query) => {
    if (!query) {
        return [];
    }

    try {
        const response = await axios.get(`https://reactify-88q1.onrender.com/api/friend/searchfriend/${query}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
            },
        });

        // Axios automatically parses the JSON response
        return response.data;
    } catch (error) {
        // Handle errors
        const errorMessage = error.response?.data?.message || 'Failed to search for friends.';
        throw new Error(errorMessage);
    }
};
