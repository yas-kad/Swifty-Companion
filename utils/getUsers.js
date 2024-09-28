import { getToken } from "./auth";
import { API_URL } from "@env";

export const getUsers = async (value) => {
    try {
        const accessToken = await getToken();
        const users = await fetch(`${API_URL}/v2/users?search[login]=${value}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
        })
        if (!users.ok) {
            throw new Error('Network response was not ok');
        }
        return users.json();
    } catch (error) {
        console.error("Failed to get users:", error)
        return null
    }
};

export const getUserDetails = async (userId) => {
    try {
        const accessToken = await getToken();

        const userDetails = await fetch(`${API_URL}/v2/users/${userId}`, {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
        })
        if (!userDetails.ok) {
            throw new Error('Network response was not ok');
        }
        return userDetails.json();
    } catch (error) {
        console.error("Failed to get user details:", error)
        return null
    }
};