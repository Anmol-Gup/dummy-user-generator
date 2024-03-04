import fetch from 'node-fetch';

export async function GetUsers() {
    try {
        let url = 'https://dummyjson.com/users/';

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data.users;
    } catch (error) {
        return error.message;
    }
};

export async function GetUserById(id) {
    try {
        let url = `https://dummyjson.com/users/${id}`;

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const users = await response.json();
        return users;
    } catch (error) {
        return error.message;
    }
}
