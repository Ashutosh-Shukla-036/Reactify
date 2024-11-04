export const SearchFriend = async (query) => {

    if (!query) {
        return [];
    }
        
    const response = await fetch(`http://localhost:3000/api/friend/searchfriend/${query}`,{
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
        }
    });
        
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
    }
        
    const data = await response.json();
    return data;
}