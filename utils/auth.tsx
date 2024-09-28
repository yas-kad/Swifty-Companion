import { authorize } from 'react-native-app-auth';
import Config from "react-native-config";


export async function getToken() {
    console.log("Getting token")
    console.log("env env", Config.CLIENTID)
    const data = {
        grant_type: 'client_credentials',
        client_id: process.env.clientId??"",
        client_secret: process.env.clientSecret??"",
    };

    return await fetch(`${process.env.url}/oauth/token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(data).toString(),
    }).then(async (response)=>{
        if (!response.ok){
            return null
        }
        const responseData = await response.json();
        return responseData.access_token
    }).catch((err)=>{
        return null
    })

}
