import React, { useContext } from 'react';

import IApiContextProps from '../../interfaces/IApiContextProps';
import HeaderSlider from '../HeaderSlider/HeaderSlider';
import ApiContext from '../../context/ApiContext';
import { slides, logoSlides } from '../../mockedData/images';
import BodySlider from '../BodySlider/BodySlider';
import ICategory from '../../interfaces/ICategory';

function ProductGrid() {
  const bgColors = ['bg-bgBeige', 'bg-bgGreen', 'bg-bgBlue', 'bg-bgOrange'];

  const { products, categories } = useContext<IApiContextProps>(
    ApiContext as React.Context<IApiContextProps>
  );

  return (
    <div className="w-[95%] flex flex-wrap justify-center items-center">
      <div className="w-full flex absolute top-[100px]">
        <HeaderSlider width="95%" height="600px" gradient="0" slides={slides} />
      </div>

      <div className="relative flex flex-wrap justify-center items-center mt-[240px] z-10">
        {categories?.slice(13, 17).map((category: ICategory, index: number) => (
          <div
            className="flex flex-col items-center justify-start w-[350px] h-[415px] m-[10px] p-[15px] bg-white"
            key={Math.random()}
          >
            <div className="w-full flex items-start">
              <h1 className="text-black text-[21px] font-bold p-0 -mb-5">{`Conheça os ${category.name}`}</h1>
            </div>
            <div className="flex flex-col items-center w-full h-full m-5">
              <div className="w-full h-full flex flex-wrap items-center justify-center">
                {products
                  ?.filter((product) => product.category === category.slug)
                  ?.slice(0, 4)
                  ?.map((productByCategory) => (
                    <div key={Math.random()} className="flex flex-col items-start">
                      <div
                        className={`w-[144px] h-28 flex ${bgColors[index]} m-[8px] items-center justify-center`}
                      >
                        <img className="w-20 h-20" src={productByCategory.images[0]} />
                      </div>
                      <span className="text-[10px] pl-2 text-black">
                        {productByCategory.title.slice(0, 27)}
                      </span>
                    </div>
                  ))}
              </div>
              <button className="w-full text-hiperlinkColor flex items-start mt-7 text-[12px]">
                Ver mais {category.name}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center items-center">
        {products?.slice(4, 8).map((product) => (
          <div
            className="flex flex-col items-center w-[350px] h-[415px] m-[10px] p-[20px] bg-white"
            key={Math.random()}
          >
            <h1 className="text-black text-[21px] font-bold mb-5">Aproveite os descontos</h1>
            <div className="flex flex-col items-center w-full h-full overflow-hidden">
              {/* criar uma classe ou uma entidade para o objeto product para poder tipar */}
              <img className="w-full h-full" src={product.images[0]} />
            </div>
            <button className="w-full text-hiperlinkColor flex items-start mt-7 text-[12px]">
              Ver mais {product.category}
            </button>
          </div>
        ))}
      </div>

      <div className="w-[95%] h-[290px] mt-[10px] mb-[10px] flex items-center justify-center">
        <BodySlider slides={logoSlides} />
      </div>
      <div className="w-[95%] h-[290px] mt-[10px] mb-[10px] flex items-center justify-center">
        <BodySlider
          slides={products?.map((product) =>
            product.category === 'mobile-accessories' ? product.images[0] : ''
          )}
        />
      </div>
      <div className="w-[95%] h-[290px] mt-[10px] mb-[10px] flex items-center justify-center">
        <BodySlider
          slides={products
            ?.map((product) => (product.category === 'mens-watches' ? product.images[0] : ''))
            .concat(
              products?.map((product) =>
                product.category === 'womens-watches' ? product.images[0] : ''
              )
            )}
        />
      </div>

      <div className="flex flex-wrap justify-center items-center">
        {products?.slice(8, 16).map((product) => (
          <div
            className="flex flex-col items-center w-[350px] h-[415px] m-[10px] p-[20px] bg-white"
            key={Math.random()}
          >
            <h1 className="text-black text-[21px] font-bold mb-5">Compre roupas em até 12x</h1>
            <div className="flex flex-col items-center w-full h-full  overflow-hidden">
              {/* criar uma classe ou uma entidade para o objeto product para poder tipar */}
              <h1></h1>
              <img className="w-full h-full" src={product.images[0]} />
            </div>
            <button className="w-full text-hiperlinkColor flex items-start mt-7 text-[12px]">
              Ver mais {product.category}
            </button>
          </div>
        ))}
      </div>

      <div className="w-[95%] h-[290px] mt-[10px] mb-[10px] flex items-center justify-center">
        <BodySlider
          slides={products
            ?.map((product) => (product.category === 'home-accessories' ? product.images[0] : ''))
            .concat(
              products?.map((product) =>
                product.category === 'kitchen-accessories' ? product.images[0] : ''
              )
            )}
        />
      </div>
      <div className="w-[95%] h-[290px] mt-[10px] mb-[10px] flex items-center justify-center">
        <BodySlider
          slides={products
            ?.map((product) => (product.category === 'laptops' ? product.images[0] : ''))
            .concat(
              products?.map((product) => (product.category === 'tablets' ? product.images[0] : ''))
            )}
        />
      </div>

      <div className="flex flex-wrap justify-center items-center">
        {products?.slice(100, 108).map((product) => (
          <div
            className="flex flex-col items-center w-[350px] h-[415px] m-[10px] p-[20px] bg-white"
            key={Math.random()}
          >
            <h1 className="text-black text-[21px] font-bold mb-5">Frete grátis na sua região</h1>
            <div className="flex flex-col items-center w-full h-full  overflow-hidden">
              {/* criar uma classe ou uma entidade para o objeto product para poder tipar */}
              <h1></h1>
              <img className="w-full h-full" src={product.images[0]} />
            </div>
            <button className="w-full text-hiperlinkColor flex items-start mt-7 text-[12px]">
              Ver mais {product.category}
            </button>
          </div>
        ))}
      </div>

      <div className="w-[95%] h-[290px] mt-[10px] mb-[10px] flex items-center justify-center">
        <BodySlider
          slides={products
            ?.map((product) => (product.category === 'beauty' ? product.images[0] : ''))
            .concat(
              products?.map((product) =>
                product.category === 'skin-care' ? product.images[0] : ''
              )
            )}
        />
      </div>
      <div className="w-[95%] h-[290px] mt-[10px] mb-[10px] flex items-center justify-center">
        <BodySlider
          slides={products
            ?.map((product) => (product.category === 'womens-bags' ? product.images[0] : ''))
            .concat(
              products?.map((product) =>
                product.category === 'womens-shoes' ? product.images[0] : ''
              )
            )}
        />
      </div>
    </div>
  );
}

export default ProductGrid;
