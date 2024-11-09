export const login = async (username, password, setUser) => {

    const response = await fetch('https://reactify-i1sa.onrender.com/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({ username, password })
    });

    const data = await response.json();

    if (!response.ok) {
        const errorMessage = data.message || 'An error occurred during login.';
        throw new Error(errorMessage);
    }

    sessionStorage.setItem('token', data.token);
    sessionStorage.setItem('user', JSON.stringify({ 
        username: data.username,  
        userId: data.userId,
        balnace: data.balance
    }));
    setUser({ 
        username: data.username,  
        userId: data.userId, 
        balance: data.balance
    }); 
};