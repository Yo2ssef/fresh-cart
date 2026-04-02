"use server"

import { getUseToken } from "@/app/MyUtils"
import { revalidatePath } from 'next/cache';

export async function handleDelteOneItem(idProdct: string) {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API}api/v2/cart/${idProdct}`, {
            method: "DELETE",
            headers: {
                token: (await getUseToken() as string)
            },
        })

        const data = await response.json()
        revalidatePath('/cart')
        return data

    } catch (error) {
        console.error(error);
        throw error;
    }
}