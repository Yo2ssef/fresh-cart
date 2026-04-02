"use server"

import { allDataBrands } from "./brands.interface";

export async function getAllBrands() {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API}api/v1/brands`, {
            cache: "force-cache",
        });
        const data: allDataBrands = await response.json();
        return data.data;
    } catch (error) {
        console.error(error);
    }

}