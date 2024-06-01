import ICategory from './ICategory';
import IProducts from './Iproducts';

export default interface IApiContextProps {
  products: IProducts[] | undefined;
  categories: ICategory[] | undefined;
}
