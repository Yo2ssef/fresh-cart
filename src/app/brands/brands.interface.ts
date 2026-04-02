export interface allDataBrands {
    results: number
    metadata: Metadata
    data: Brand[]
}

export interface Metadata {
    currentPage: number
    limit: number
    nextPage: number
    numberOfPages: number
}

export interface Brand {
    createdAt: string
    image: string
    name: string
    slug: string
    updatedAt: string
    _id: string
}



