import { AllCategoriesData, CategoriesInfo } from "./categories.interface";

export async function getAllCategories(): Promise<CategoriesInfo[] | undefined> {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API}api/v1/categories`, {
            cache: "force-cache",
        },
        );
        const data: AllCategoriesData = await response.json();
        return data.data
    } catch (error) {
        console.error(error);
        throw error;
    }

}
