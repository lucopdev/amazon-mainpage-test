import React, { useContext } from 'react';

import IApiContextProps from '../../interfaces/IApiContextProps';
import ImageSlider from '../ImageSlider/ImageSlider';
import ApiContext from '../../context/ApiContext';
import { slides } from '../../mockedData/images';

function ProductGrid() {
  const bgColors = ['bg-bgBeige', 'bg-bgGreen', 'bg-bgBlue', 'bg-bgOrange'];


  const { products, categories } = useContext<IApiContextProps>(
    ApiContext as React.Context<IApiContextProps>
  );

  return (
    <div className="w-[95%] flex flex-wrap justify-center items-center">
      
      <ImageSlider width="100%" height="600px" gradient="0" arrowPosition='top' slides={slides} />

      <div className="relative flex flex-wrap justify-center items-center mt-[240px] z-10">
        {categories?.slice(0, 4).map((category: string, index: number) => (
          <div
            className="flex flex-col items-center justify-start w-[350px] h-[415px] m-[10px] p-[15px] bg-white"
            key={Math.random()}
          >
            <div className="w-full flex items-start">
              <h1 className="text-black text-[21px] font-bold p-0 -mb-5">{`Conheça os ${category}`}</h1>
            </div>
            <div className="flex flex-col items-center w-full h-full m-5">
              <div className="w-full h-full flex flex-wrap items-center justify-center">
                {products
                  ?.filter((product) => product.category === category)
                  ?.slice(0, 4)
                  ?.map((productByCategory) => (
                    <div key={Math.random()} className="flex flex-col items-start">
                      <div
                        className={`w-[144px] h-28 flex ${bgColors[index]} m-[8px] items-center justify-center`}
                      >
                        <img className="w-20 h-20" src={productByCategory.image} />
                      </div>
                      <span className="text-[10px] pl-2">{`${
                        productByCategory.title.split(' ')[0]
                      } ${productByCategory.title.split(' ')[1]} ${
                        productByCategory.title.split(' ')[2]
                      }`}</span>
                    </div>
                  ))}
              </div>
              <button className="w-full text-hiperlinkColor flex items-start mt-7 text-[12px]">
                Ver mais {category}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center items-center">
        {products?.slice(12, 16).map((product) => (
          <div
            className="flex flex-col items-center w-[350px] h-[415px] m-[10px] p-[20px] bg-white"
            key={Math.random()}
          >
            <h1 className="text-black text-[21px] font-bold mb-5">Aproveite os descontos</h1>
            <div className="flex flex-col items-center w-full h-full overflow-hidden">
              {/* criar uma classe ou uma entidade para o objeto product para poder tipar */}
              <img className="w-full h-full" src={product.image} />
            </div>
            <button className="w-full text-hiperlinkColor flex items-start mt-7 text-[12px]">
              Ver mais {product.category}
            </button>
          </div>
        ))}
      </div>

      <div className="w-full h-[280px] bg-yellow-500 mt-[10px] mb-[10px]"></div>
      {/* CARROSEL */}
      <div className="w-full h-[280px] bg-yellow-500 mt-[10px] mb-[10px]"></div>
      {/* CARROSEL */}
      <div className="w-full h-[280px] bg-yellow-500 border mt-[10px] mb-[10px]"></div>
      {/* CARROSEL */}

      <div className="flex flex-wrap justify-center items-center">
        {products?.slice(16, 20).map((product) => (
          <div
            className="flex flex-col items-center w-[350px] h-[415px] m-[10px] p-[20px] bg-white"
            key={Math.random()}
          >
            <h1 className="text-black text-[21px] font-bold mb-5">Compre roupas em até 12x</h1>
            <div className="flex flex-col items-center w-full h-full  overflow-hidden">
              {/* criar uma classe ou uma entidade para o objeto product para poder tipar */}
              <h1></h1>
              <img className="w-full h-full" src={product.image} />
            </div>
            <button className="w-full text-hiperlinkColor flex items-start mt-7 text-[12px]">
              Ver mais {product.category}
            </button>
          </div>
        ))}
      </div>

      <div className="w-full h-[280px] bg-yellow-500 mt-[10px] mb-[10px]"></div>
      {/* CARROSEL */}
      <div className="w-full h-[280px] bg-yellow-500 mt-[10px] mb-[10px]"></div>
      {/* CARROSEL */}

      <div className="flex flex-wrap justify-center items-center">
        {products?.slice(0, 4).map((product) => (
          <div
            className="flex flex-col items-center w-[350px] h-[415px] m-[10px] p-[20px] bg-white"
            key={Math.random()}
          >
            <h1 className="text-black text-[21px] font-bold mb-5">Frete grátis na sua região</h1>
            <div className="flex flex-col items-center w-full h-full  overflow-hidden">
              {/* criar uma classe ou uma entidade para o objeto product para poder tipar */}
              <h1></h1>
              <img className="w-full h-full" src={product.image} />
            </div>
            <button className="w-full text-hiperlinkColor flex items-start mt-7 text-[12px]">
              Ver mais {product.category}
            </button>
          </div>
        ))}
      </div>
      <div className="w-full h-[280px] bg-yellow-500 mt-[10px] mb-[10px]"></div>
      {/* CARROSEL */}
    </div>
  );
}

export default ProductGrid;
