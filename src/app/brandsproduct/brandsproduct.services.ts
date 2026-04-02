"use server"

import { BrandProductsAllData } from "./brandsproduct.interface";

export async function getBrandProducts(id: string) {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API}api/v1/brands/${id}`, {
            cache: "force-cache",
        });
        const data:BrandProductsAllData = await response.json();
        return data.data;
    } catch (error) {
        console.error(error);
    }

}