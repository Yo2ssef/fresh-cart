"use server"
import { getUseToken } from "@/app/MyUtils"
import { revalidatePath } from "next/cache"

/*********** Add Product To Card Api*********/
export async function handleActionAddToCard(idProduct: string) {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API}api/v2/cart`, {
            method: "POST",
            headers: {
                token: (await getUseToken() as string),
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                productId: idProduct
            })
        })

        const dataAddToCard = await response.json()
        revalidatePath('/cart')
        revalidatePath('/cart/checkout')
        return dataAddToCard;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

/*********** Get All Product Card Api*********/

export async function getProductCard() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API}api/v2/cart`, {
            method: "GET",
            headers: {
                token: (await getUseToken() as string)
            },
            cache: "force-cache"
        })

        const dataGetToCard = await response.json()
        return dataGetToCard;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

