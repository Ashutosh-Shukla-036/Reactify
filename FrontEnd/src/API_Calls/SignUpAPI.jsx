import axios from "axios";

export const signup = async (username, password) => {
    try {
        const response = await axios.post('https://reactify-i1sa.onrender.com/api/signup', {
            username,
            password,
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // Return success message from the response
        return response.data.message;
    } catch (error) {
        // Handle errors
        const errorData = error.response?.data;
        const errorMessage = errorData?.message 
            ? Array.isArray(errorData.message) 
                ? errorData.message.map(err => err.message).join(', ') 
                : errorData.message
            : "Something went wrong";
        throw new Error(errorMessage);
    }
};
