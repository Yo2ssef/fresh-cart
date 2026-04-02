export interface BrandProductsAllData {
    data: BrandData
}

export interface BrandData {
    _id: string;
    name: string;
    slug: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}
