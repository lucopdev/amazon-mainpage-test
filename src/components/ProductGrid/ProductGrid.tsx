import IProductsComponentProps from '../../interfaces/IProductsComponentProps';
import IProducts from '../../interfaces/Iproducts';

function ProductGrid({ products, initialIndex, finalIndex, labels }: IProductsComponentProps) {
  return (
    <div className="relative grid grid-cols-4 max-tablet:grid-cols-3 justify-center items-center">
      {products?.slice(initialIndex, finalIndex).map((product: IProducts, index: number) => (
        <div
          className={`flex flex-col items-center justify-start w-[350px] h-[415px] max-[1580px]:w-[95%] m-[10px] p-[15px] bg-white ${
            index === 3 && 'max-tablet:hidden'
          }`}
          key={Math.random()}
        >
          <h1 className="text-black text-[21px] font-bold mb-5">{labels[index]}</h1>
          <div className="flex flex-col items-center w-full h-full overflow-hidden">
            <img className="w-full h-full" src={product.images[0]} />
          </div>
          <button className="w-full text-hiperlinkColor flex items-start mt-7 text-[12px]">
            Ver mais {product.category}
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductGrid;
