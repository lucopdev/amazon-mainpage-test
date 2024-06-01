import { useState } from 'react';
import IBodySlider from '../../interfaces/IBodySlider';

function BodySlider({ slides, width = '100%', height = '100%' }: IBodySlider) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const slideLeft = () => {
    const index = slides && currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const slideRight = () => {
    const index = slides && currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
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
        className=" bg-white"
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
          <div className="w-full flex items-center justify-between overflow-x-scroll">
            {slides?.map((slide) => (
              <img className="w-[200px] h-[200px]" src={slide} />
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
