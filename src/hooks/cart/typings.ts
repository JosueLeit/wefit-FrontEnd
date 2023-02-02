export type Product = {
  id: number | string;
  image_url: string;
  price: number;
  quantity: number;
  title: string;
};

export type CartStore = {
  products: Product[];
};
