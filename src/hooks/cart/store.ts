import { create } from 'zustand';

import { CartStore } from './typings';

export const useCartStore = create<CartStore>(() => ({
  products: [],
}));
