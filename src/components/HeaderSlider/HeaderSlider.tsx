import { useState } from 'react';
import IHeaderSlider from '../../interfaces/IHeaderSlider';

function HeaderSlider({
  slides,
  width = '100%',
  height = '280px',
  gradient = '100',
}: IHeaderSlider) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const slideLeft = () => {
    const index = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const slideRight = () => {
    const index = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  return (
    <div className="w-full flex items-center justify-center absolute">
      <div
        className="absolute top-[0px] z-0 bg-no-repeat bg-cover"
        style={{
          width: width,
          height: height,
          backgroundImage: `url(${slides[currentIndex]})`,
          backgroundPosition: 'center',
        }}
      >
        <div
          className="w-full h-full flex justify-between"
          style={{
            background: `linear-gradient(to top, rgba(227, 230, 230, 1) -${gradient}%, transparent, rgba(0, 0, 0, 0))`,
          }}
        >
          <button
            onClick={slideLeft}
            className="w-[85px] h-[250px] text-[120px] relative text-black flex items-center justify-center focus:rounded focus:border-2 focus:border-white"
          >
            <span className="leading-[70px] w-14 h-24 text-[120px]">&#8249;</span>
          </button>
          <button
            onClick={slideRight}
            className="w-[85px] h-[250px] text-[120px] relative right-0 text-black flex items-center justify-center focus:rounded focus:border-2 focus:border-white"
          >
            <span className="leading-[70px] w-14 h-24 text-[120px]">&#8250;</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeaderSlider;
