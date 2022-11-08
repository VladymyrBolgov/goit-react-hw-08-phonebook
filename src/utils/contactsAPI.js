const BASE_URL = 'https://636038fe3e8f65f283c5ee39.mockapi.io/api/v1/';

export const getAllContacts = async () => {
    const contacts = await fetch(`${BASE_URL}contacts`)
        if (contacts.ok) {
            return contacts.json();
            }
            return Promise.reject(new Error(`We have a problem`))    
}