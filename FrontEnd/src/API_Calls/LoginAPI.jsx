import axios from "axios";

export const login = async (username, password, setUser) => {
    try {
        const response = await axios.post('https://reactify-88q1.onrender.com/api/login', {
            username,
            password,
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = response.data;

        // Store the token and user info in sessionStorage
        sessionStorage.setItem('token', data.token);
        sessionStorage.setItem('user', JSON.stringify({
            username: data.username,
            userId: data.userId,
            balance: data.balance,
        }));

        // Update the user state
        setUser({
            username: data.username,
            userId: data.userId,
            balance: data.balance,
        });

    } catch (error) {
        const errorMessage = error.response?.data?.message || 'An error occurred during login.';
        throw new Error(errorMessage);
    }
};
