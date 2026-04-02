"use server"

import { getUseToken } from "@/app/MyUtils"
import { revalidatePath } from "next/cache";
import { ShippingAddressType } from "./FormOrder.interface";

export async function handleCashOrder(shippingAddress: ShippingAddressType, idCard: string) {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API}api/v2/orders/${idCard}`, {
            method: "POST",
            headers: {
                token: (await getUseToken() as string),
                "Content-Type": "application/json"
            },
            body: JSON.stringify(shippingAddress)
        })

        const data = await response.json()
        console.log("Data From API CASH ORDER:", data)
        revalidatePath('/cart')
        return data

    } catch (error) {
        console.error(error);
        throw error;
    }
}
export async function handleOnlineOrder(shippingAddress: ShippingAddressType, idCard: string) {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API}api/v1/orders/checkout-session/${idCard}?url=http://localhost:3000`, {
            method: "POST",
            headers: {
                token: (await getUseToken() as string),
                "Content-Type": "application/json"
            },
            body: JSON.stringify(shippingAddress)
        })

        const data = await response.json()
        revalidatePath('/cart')
        return data

    } catch (error) {
        console.error(error);
        throw error;
    }
}
