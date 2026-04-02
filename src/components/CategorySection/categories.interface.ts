/*********** InterFace Categories  ***********/

export interface AllCategoriesData {
  results: number
  metadata: Metadata
  data: CategoriesInfo[]
}

export interface Metadata {
  currentPage: number
  numberOfPages: number
  limit: number
}

export interface CategoriesInfo {
  _id: string
  name: string
  slug: string
  image: string
  createdAt: string
  updatedAt: string
}

/*********** InterFace CategoriesData  ***********/


export interface Root {
  data: Data
}

export interface Data {
  _id: string
  name: string
  slug: string
  image: string
  createdAt: string
  updatedAt: string
  __v: number
}