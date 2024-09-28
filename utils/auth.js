import { authorize } from 'react-native-app-auth';
import { CLIENTID, CLIENT_SECRET, API_URL } from "@env";


export async function getToken() {
    const data = {
        grant_type: 'client_credentials',
        client_id: CLIENTID ?? "",
        client_secret: CLIENT_SECRET ?? "",
    };
    return await fetch(`${API_URL}/oauth/token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(data).toString(),
    }).then(async (response) => {
        if (!response.ok) {
            return null
        }
        const responseData = await response.json();
        return responseData.access_token
    }).catch((err) => {
        console.error("Failed to get token:", err)
        return null
    })

}
