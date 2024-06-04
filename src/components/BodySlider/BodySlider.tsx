import { RefObject, useRef } from 'react';

import IBodySlider from '../../interfaces/IBodySlider';
import uniqueId from 'uniqueid';

function BodySlider({ slides, width = '100%', height = '100%' }: IBodySlider) {
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
            className="w-[45px] h-[105px] bg-white shadow-md shadow-slate-500 absolute rounded left-5 top-[28%] pb-3 text-black flex items-center justify-center focus:rounded focus:border-2 focus:border-bgNav"
          >
            <span className="leading-[10px] w-full h-full text-[50px] text-bgFooterBtnHover flex items-center justify-center hover:text-black">
              &#x02039;
            </span>
          </button>
          <div
            className="w-full flex items-center justify-between overflow-x-scroll no-scrollbar"
            ref={carousel}
          >
            {slides?.map((slide, index) => (
              <img
                key={uKey()}
                className="w-[200px] h-[200px]"
                src={slide}
                alt={`Slide ${index}`}
              />
            ))}
          </div>
          <button
            onClick={slideRight}
            className="w-[45px] h-[105px] bg-white shadow-md shadow-slate-500 absolute rounded right-5 top-[28%] pb-3 text-black flex items-center justify-center focus:rounded focus:border-2 focus:border-bgNav"
          >
            <span className="leading-[10px] w-full h-full text-[50px] text-bgFooterBtnHover flex items-center justify-center hover:text-black">
              &#x0203A;
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BodySlider;
