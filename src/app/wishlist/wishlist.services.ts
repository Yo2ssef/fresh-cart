"use server"
import { getUseToken } from "@/app/MyUtils"
import { revalidatePath } from 'next/cache';
/******************Api Add To WishList******************/

export async function addToWishList(id: string) {
    const bodyData = {
        productId: id
    };
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API}api/v1/wishlist`, {
            method: "POST",
            headers: {
                'content-Type': 'application/json',
                token: (await getUseToken() as string),
            },
            body: JSON.stringify(bodyData)
        })

        const data = await response.json()
        revalidatePath('/wishlist')
        return data

    } catch (error) {
        console.error(error);
        throw error;
    }
}

/******************Api Get WishList******************/


export async function getAllWishlist() {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API}api/v1/wishlist`, {
            headers: {
                token: (await getUseToken() as string)
            },
            cache: "no-store",
        });
        const data = await response.json();
        return data
    } catch (error) {
        console.error(error);
    }
}


/******************Api Remove WishList******************/


export async function removeFromWishList(idProduct: string) {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API}api/v1/wishlist/${idProduct}`, {
            method: "DELETE",
            headers: {
                token: (await getUseToken() as string)
            },
        })

        const data = await response.json()
        revalidatePath('/wishlist')
        return data

    } catch (error) {
        console.error(error);
        throw error;
    }
}









