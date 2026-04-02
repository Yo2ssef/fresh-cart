export interface ProductItemData {
  count: number;
  price: number;
  _id: string;
  product: {
    title: string;
    id: string;
    category: { name: string };
    imageCover: string;
    _id: string;
    slug: string;
  };
}

export interface ProductItemProps {
  products: ProductItemData;
}
