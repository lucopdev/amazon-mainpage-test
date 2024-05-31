import { getAllCategories, getAllProducts, getInCategory } from './api';
import { ReactNode, useEffect, useMemo, useState } from 'react';
import ApiContext from '../context/ApiContext';
import { Product } from '../model/product';

interface MenuProviderProps {
  children: ReactNode;
}

function ApiProvider({ children }: MenuProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [jeweleryProducts, setJeweleryProducts] = useState<Product[]>([]);
  const [electronicProducts, setElectronicProducts] = useState<Product[]>([]);
  const [mensClothingProducts, setMensClothingProducts] = useState<Product[]>([]);
  const [womensClothingProducts, setWomensClothingProducts] = useState<Product[]>([]);
  const fetchProducts = async () => {
    const data = await getAllProducts();
    setProducts(data);
  };

  const fetchCategories = async () => {
    const data = await getAllCategories();
    setCategories(data);
  };

  const fetchJeweleryProducts = async (category: string) => {
    const data = await getInCategory(category);
    setJeweleryProducts(data);
  };
  const fetchElectronicProducts = async (category: string) => {
    const data = await getInCategory(category);
    setElectronicProducts(data);
  };
  const fetchMensClothingProducts = async (category: string) => {
    const data = await getInCategory(category);
    setMensClothingProducts(data);
  };
  const fetchWomensClothingProducts = async (category: string) => {
    const data = await getInCategory(category);
    setWomensClothingProducts(data);
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
    fetchJeweleryProducts('jewelery');
    fetchElectronicProducts('electronics');
    fetchMensClothingProducts("men's clothing");
    fetchWomensClothingProducts("women's clothing");
  }, []);

  const values = useMemo(
    () => ({
      products,
      categories,
      jeweleryProducts,
      electronicProducts,
      mensClothingProducts,
      womensClothingProducts,
    }),
    [products, jeweleryProducts, electronicProducts, mensClothingProducts, womensClothingProducts]
  );

  return <ApiContext.Provider value={values}>{children}</ApiContext.Provider>;
}

export default ApiProvider;
