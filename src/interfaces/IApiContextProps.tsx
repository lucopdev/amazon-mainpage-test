import { Product } from '../model/product';

export default interface IApiContextProps {
  products: Product[] | undefined;
  categories: string[];
  jeweleryProducts: Product[];
  electronicProducts: Product[];
  mensClothingProducts: Product[];
  womensClothingProducts: Product[];
}
