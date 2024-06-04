import { useRef, useEffect, useState, RefObject } from 'react';

import IHeaderSlider from '../../interfaces/IHeaderSlider';
import uniqueId from 'uniqueid';

function HeaderSlider({ slides }: IHeaderSlider) {
  const uKey = uniqueId();
  const carousel: RefObject<HTMLDivElement> = useRef(null);

  const [duplicatedSlides, setDuplicatedSlides] = useState<string[]>([]);

  useEffect(() => {
    setDuplicatedSlides([...slides, ...slides]);
  }, [slides]);

  const handleScroll = () => {
    if (carousel.current) {
      const scrollLeft = carousel.current.scrollLeft;
      const scrollWidth = carousel.current.scrollWidth;
      const offsetWidth = carousel.current.offsetWidth;

      if (scrollLeft === 0) {
        carousel.current.scrollLeft = scrollWidth / 2 - offsetWidth;
      } else if (scrollLeft + offsetWidth >= scrollWidth) {
        carousel.current.scrollLeft = scrollWidth / 2;
      }
    }
  };

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
    <div className="w-full flex items-center justify-center">
      <div className="w-[95%] flex items-center justify-center relative">
        <div className="w-full flex overflow-x-hidden" ref={carousel} onScroll={handleScroll}>
          {duplicatedSlides.map((slide, index) => (
            <div key={uKey() + index} className="relative min-w-full">
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
