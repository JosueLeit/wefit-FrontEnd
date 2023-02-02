import { useEffect, useState } from 'react';

import env from '../../env';
import { httpRequest } from '../../utils';
import { Product } from './typings';
import { parseProductCollection } from './utils';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasMoreProducts, setHasMoreProducts] = useState(true);

  async function loadMore() {
    setLoading(true);
    const start = products.length;
    const end = start + env.PAGINATION_LIMIT;
    const path = `/products?_start=${start}&_end=${end}`;
    try {
      const response = await httpRequest(env.API_BASE_URL + path);
      const totalItems = response.headers?.['x-total-count']
        ? Number(response.headers?.['x-total-count'])
        : 0;
      const data = parseProductCollection(response.data);
      const newProducts = [...products, ...data];
      setHasMoreProducts(newProducts.length < totalItems);
      setProducts(old => [...old, ...data]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadMore();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return { products, loading, loadMore, hasMoreProducts };
};
