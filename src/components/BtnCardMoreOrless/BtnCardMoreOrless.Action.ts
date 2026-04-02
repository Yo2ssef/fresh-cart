"use server"

import { getUseToken } from "@/app/MyUtils"
import { revalidatePath } from "next/cache";

export async function handleMoreOrLess(newCount: number, idProdct: string) {
    console.log("Updating item count in cart:", { idProdct, newCount });
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API}api/v2/cart/${idProdct}`, {
            method: "PUT",
            headers: {
                token: (await getUseToken() as string),
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ count: newCount })
        })

        const data = await response.json()
        revalidatePath('/cart')
        return data

    } catch (error) {
        console.error(error);
        throw error;
    }
}