import { shallow } from 'zustand/shallow';

import { useCartStore } from './store';
import { Product } from './typings';

export const useCartTotalItems = () => {
  const totalItems = useCartStore(state => state.products.length);
  return totalItems;
};

export const useCartProducts = () => {
  const products = useCartStore(state => state.products);
  return products;
};

export const useCartTotals = () => {
  const products = useCartProducts();
  return products.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);
};

export const useCartAddProduct = () => {
  return (newProduct: Product) => {
    const products = useCartStore.getState().products || [];
    const productIndex = products.findIndex(p => p.id === newProduct.id);
    const hasInCart = productIndex >= 0;
    const copyOfProducts = [...products];
    if (hasInCart) {
      copyOfProducts[productIndex].quantity =
        copyOfProducts[productIndex].quantity + newProduct.quantity;
    } else {
      copyOfProducts.push(newProduct);
    }
    useCartStore.setState({ products: copyOfProducts });
  };
};

export const useCartProduct = (productId: number | string) => {
  const productIndex = useCartStore(state => {
    return state.products.findIndex(p => p.id === productId);
  }, shallow);
  const hasInCart = productIndex >= 0;
  const quantity = useCartStore(state => {
    if (hasInCart) return state.products[productIndex].quantity;
    return 0;
  }, shallow);

  function remove() {
    useCartStore.setState(state => ({
      products: state.products.filter(p => p.id !== productId),
    }));
  }

  function updateQuantity(newQuantity: number) {
    const copyOfProducts = [...useCartStore.getState().products];
    copyOfProducts[productIndex].quantity = newQuantity;
    useCartStore.setState({ products: copyOfProducts });
  }

  return {
    hasInCart,
    quantity,
    remove,
    updateQuantity,
  };
};

export const useCartEmptyCart = () => {
  return () => {
    useCartStore.setState({ products: [] });
  };
};
