"use server"
/*********** Api Product ***********/
import { toast } from "react-toastify";
import { AllProductsData, ProductsResponseDetails } from "./mainPage.interface";

export async function getAllProducts(): Promise<AllProductsData[] | undefined> {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API}api/v1/products`, {
            cache: "force-cache",
        });
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error(error);
        toast.error("Failed to fetch products");
    }
}

/*********** Api Product Details ***********/

export async function getProductDetails(id: string): Promise<AllProductsData> {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API}api/v1/products/${id}`, {
            next: {
                revalidate: 60
            },
        });
        const data: ProductsResponseDetails = await response.json();
        return data.data;
    } catch (error) {
        console.log(error)
        toast.error("Failed to fetch product details");
        throw error;
    }
}