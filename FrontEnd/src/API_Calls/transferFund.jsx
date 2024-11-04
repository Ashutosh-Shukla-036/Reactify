export const TransferAPI = async (senderId, receiverId, amount) => {
    const response = await fetch('http://localhost:3000/api/transaction/transfer', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
        },
        body: JSON.stringify({ senderId, receiverId, amount })
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to complete the transfer');
    }

    const data = await response.json();
    return data;
}