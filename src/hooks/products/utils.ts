import { APIProduct, Product } from './typings';

export function parseProduct(productOrProducts: APIProduct): Product {
  return {
    id: productOrProducts.id,
    image_url: productOrProducts.image,
    title: productOrProducts.title,
    price: productOrProducts.price,
  };
}

export function parseProductCollection(products: APIProduct[]): Product[] {
  return products.map(parseProduct);
}
