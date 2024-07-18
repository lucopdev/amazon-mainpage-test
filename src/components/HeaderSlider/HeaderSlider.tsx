import { useRef, RefObject } from 'react';

import IHeaderSlider from '../../interfaces/IHeaderSlider';
import uniqueId from 'uniqueid';

function HeaderSlider({ slides }: IHeaderSlider) {
  const uKey = uniqueId();
  const carousel: RefObject<HTMLDivElement> = useRef(null);

  const slideLeft = () => {
    if (carousel.current) {
      if (carousel.current.scrollLeft === 0) {
        carousel.current.scrollTo({
          left: carousel.current.offsetWidth * slides.length,
        });
      } else {
        carousel.current.scrollBy({
          left: -carousel.current.offsetWidth,
          behavior: 'smooth',
        });
      }
    }
  };

  const slideRight = () => {
    if (carousel.current) {
      if (carousel.current.scrollLeft + carousel.current.offsetWidth === carousel.current.scrollWidth) {
        carousel.current.scrollTo({
          left: 0,
        });
      } else {
        carousel.current.scrollBy({
          left: carousel.current.offsetWidth,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-[95%] flex items-center justify-center relative">
        <div className="w-full flex overflow-x-hidden" ref={carousel}>
          {slides.map((slide) => (
            <div key={uKey()} className="relative min-w-full">
              <img src={slide} className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b"></div>
            </div>
          ))}
        </div>
        <div className="w-full h-full flex justify-between absolute top-0">
          <button
            onClick={slideLeft}
            className="absolute left-0 w-[85px] h-[250px] text-[120px] text-black flex items-center justify-center focus:rounded focus:border-2 focus:border-white"
          >
            <span className="leading-[70px] w-14 h-24 text-[120px]">&#8249;</span>
          </button>
          <button
            onClick={slideRight}
            className="absolute right-0 w-[85px] h-[250px] text-[120px] text-black flex items-center justify-center focus:rounded focus:border-2 focus:border-white"
          >
            <span className="leading-[70px] w-14 h-24 text-[120px]">&#8250;</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeaderSlider;
