export const getAllProducts = async () => {
  const URL = 'https://dummyjson.com/products?limit=0&skip=0';
  const response = await fetch(URL);
  const data = await response.json();

  return data.products;
};

export const getAllCategories = async () => {
  const URL = 'https://dummyjson.com/products/categories';
  const response = await fetch(URL);
  const data = await response.json();

  return data;
};

export const getInCategory = async (category: string) => {
  const URL = `https://dummyjson.com/products/category/${category}`;
  const response = await fetch(URL);
  const data = await response.json();

  return data;
};
