"use server"

import { ReceiveResponse, userDataType } from "./register.interface"

export async function handleUserRegister(userData: userDataType): Promise<string | boolean> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}api/v1/auth/signup`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(userData),
    })
    const data: ReceiveResponse = await response.json()



    if (data.message === "success") {
        return true;

    } else if (data.message === "Account Already Exists") {
        return false
    }
    return data.message;
}