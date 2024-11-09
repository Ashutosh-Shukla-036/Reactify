export const AddFriend = async ( userId, friendId ) => {
    const response = await fetch('https://reactify-i1sa.onrender.com/api/friend/addfriend' , {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
        },
        body: JSON.stringify({ userId, friendId })
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
    }

    const data = await response.json();
    console.log(data);
    return data;
}