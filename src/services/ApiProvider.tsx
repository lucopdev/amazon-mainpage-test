import { getAllCategories, getAllProducts } from './api';
import { ReactNode, useEffect, useMemo, useState } from 'react';
import ApiContext from '../context/ApiContext';

import ICategory from '../interfaces/ICategory';
import IProducts from '../interfaces/Iproducts';

interface MenuProviderProps {
  children: ReactNode;
}

function ApiProvider({ children }: MenuProviderProps) {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);

  const fetchProducts = async () => {
    const data = await getAllProducts();
    setProducts(data);
  };

  const fetchCategories = async () => {
    const data = await getAllCategories();

    setCategories(data);
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const values = useMemo(
    () => ({
      products,
      categories,
    }),
    [products]
  );

  return <ApiContext.Provider value={values}>{children}</ApiContext.Provider>;
}

export default ApiProvider;
