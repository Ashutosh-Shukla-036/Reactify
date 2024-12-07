export const UpdateUser = async (userId) => {
    const response = await fetch(`https://reactify-i1sa.onrender.com/api/userupdate/${userId}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
        },
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to fetch user data');
    }

    const data = await response.json();
    return data;
};
