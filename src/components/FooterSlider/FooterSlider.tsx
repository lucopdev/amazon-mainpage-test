import { RefObject, useRef } from 'react';

import uniqueId from 'uniqueid';
import IFooterSliderProps from '../../interfaces/IFooterSliderProps';

function FooterSlider({ products, width = '100%', height = '100%' }: IFooterSliderProps) {
  const carousel: RefObject<HTMLDivElement> = useRef(null);
  const uKey = uniqueId('key');

  const slideLeft = () => {
    if (carousel.current) {
      carousel.current.scrollBy({
        left: -carousel.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  const slideRight = () => {
    if (carousel.current) {
      carousel.current.scrollBy({
        left: carousel.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div
      style={{
        width: width,
        height: height,
      }}
      className="flex items-center justify-center"
    >
      <div
        style={{
          width: width,
          height: height,
        }}
        className="bg-white"
      >
        <div className="w-full h-full flex relative">
          <button
            onClick={slideLeft}
            className="w-[45px] h-[40px] bg-white shadow-md shadow-slate-300 border absolute rounded -left-5 top-[40%] pb-3 text-black flex items-center justify-center focus:rounded focus:border-2 focus:border-bgNav"
          >
            <span className="leading-[10px] w-full h-full text-[40px] text-bgFooterBtnHover flex items-center justify-center hover:text-black">
              &#x02039;
            </span>
          </button>
          <div className="h-full flex overflow-x-scroll no-scrollbar relative" ref={carousel}>
            {products?.slice(50, 65).map((product, index) => (
              <div key={uKey()} className="flex w-full pl-5">
                <div className="flex flex-col items-start justify-between pl-[10px] w-[220px] h-full p-5">
                  <img className="w-[200px] h-[150px]" src={product.images[0]} alt={`Slide ${index}`} />
                  <p className="w-[180px] text-[13px] text-cyan-700">{product.description}</p>
                  <div>
                    <span className="text-[12px] text-black pb-10">R$</span>
                    <span className="text-black">{product.price}</span>
                  </div>
                  <p className="text-orange-600 pt-2">Rating: {product.rating}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={slideRight}
            className="w-[45px] h-[40px] bg-white shadow-md shadow-slate-300 border absolute rounded -right-5 top-[40%] pb-3 text-black flex items-center justify-center focus:rounded focus:border-2 focus:border-bgNav"
          >
            <span className="leading-[10px] w-full h-full text-[40px] text-bgFooterBtnHover flex items-center justify-center hover:text-black">
              &#x0203A;
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FooterSlider;
