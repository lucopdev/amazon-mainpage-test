import { useState } from 'react';
import ISliderProps from '../../interfaces/ISliderProps';

function ImageSlider({ slides, width, height, gradient }: ISliderProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const slideLeft = () => {
    
  };

  const slideRight = () => {

  };

  return (
    <div className="w-full flex items-center justify-center relative">
      <div
        className="absolute top-[0px] z-0 bg-no-repeat bg-contain"
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
          <button className="w-[100px] h-[250px] text-[150px] flex items-center justify-center">
            &#8249;
          </button>
          <button className="w-[100px] h-[250px] text-[150px] flex items-center justify-center">
            &#8250;
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
