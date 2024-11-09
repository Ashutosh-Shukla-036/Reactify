export const signup = async (username, password) => {
    const response = await fetch('https://reactify-i1sa.onrender.com/api/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (!response.ok) {
        const errorMessage = data.message 
            ? Array.isArray(data.message) 
                ? data.message.map(err => err.message).join(', ') 
                : data.message
            : "Something went wrong";
        throw new Error(errorMessage);
    }
    return data.message;
};