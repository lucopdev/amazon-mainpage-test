import IProducts from './Iproducts';

export default interface IProductsComponentProps {
  products: IProducts[] | undefined;
  initialIndex: number;
  finalIndex: number;
  labels: string[];
}
