import { RefObject, useRef } from 'react';
import IHeaderSlider from '../../interfaces/IHeaderSlider';
import uniqueId from 'uniqueid';

function HeaderSlider({ slides }: IHeaderSlider) {
  const uKey = uniqueId();
  const carousel: RefObject<HTMLDivElement> = useRef(null);

  const slideLeft = () => {
    if (carousel.current) {
      if (carousel.current?.offsetWidth >= 1140) {
        carousel.current.scrollTo({
          left: carousel.current.offsetWidth + 1000,
          behavior: 'smooth',
        });
      }
      carousel.current.scrollBy({
        left: -carousel.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  const slideRight = () => {
    if (carousel.current) {
      console.log(carousel.current.offsetWidth);
      carousel.current.scrollBy({
        left: carousel.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-[95%] flex items-center justify-center relative">
        <div className="w-full flex overflow-x-hidden" ref={carousel}>
          {slides.map((slide) => (
            <img key={uKey()} src={slide} />
          ))}
          <div className="w-full h-full flex justify-between">
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
    </div>
  );
}

export default HeaderSlider;
