import { useState } from 'react';
import ISliderProps from '../../interfaces/ISliderProps';

function ImageSlider({ slides, width, height, gradient, arrowPosition }: ISliderProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const slideLeft = () => {
    const index = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const slideRight = () => {
    const index = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  const arrowStyle = {
    top:
      arrowPosition === 'top'
        ? '0%'
        : arrowPosition === 'middle'
        ? '25%'
        : arrowPosition === 'bottom'
        ? '55%'
        : '25%',
  };

  return (
    <div className="w-full flex items-center justify-center relative">
      <div
        className="absolute top-[0px] z-0 bg-no-repeat bg-cover"
        style={{
          width: width,
          height: height,
          backgroundImage: `url(${slides[currentIndex]})`,
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
            style={arrowStyle}
            className="w-[85px] h-[250px] text-[120px] absolute text-black pt-5 flex items-start justify-center focus:rounded focus:border-2 focus:border-white"
          >
            <span className="">&#8249;</span>
          </button>
          <button
            onClick={slideRight}
            style={arrowStyle}
            className="w-[85px] h-[250px] text-[120px] absolute right-0 text-black pt-5 flex items-start justify-center focus:rounded focus:border-2 focus:border-white"
          >
            <span className="">&#8250;</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
