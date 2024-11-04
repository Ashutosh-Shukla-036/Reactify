export const history = async ( userId ) => {
    const response = await fetch(`http://localhost:3000/api/transaction/history/${userId}` , {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization' : `Bearer ${sessionStorage.getItem('token')}`,
        }
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
    }

    const data = response.json();
    return data;
}