"use server"

export async function getOneCategories(idCategory: string) {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API}api/v1/categories/${idCategory}`, {
            cache: "force-cache",
        });
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error(error);
    }

}