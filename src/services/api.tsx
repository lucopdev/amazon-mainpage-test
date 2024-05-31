import { Product } from '../model/product';

export const getAllProducts = async () => {
  const URL = 'https://fakestoreapi.com/products';
  const response = await fetch(URL);
  const data = (await response.json()) as Product[];

  return data;
};

export const getAllCategories = async () => {
  const URL = 'https://fakestoreapi.com/products/categories';
  const response = await fetch(URL);
  const data = await response.json();

  return data;
};

export const getInCategory = async (category: string) => {
  const URL = `https://fakestoreapi.com/products/category/${category}`;
  const response = await fetch(URL);
  const data = await response.json();

  return data;
};
