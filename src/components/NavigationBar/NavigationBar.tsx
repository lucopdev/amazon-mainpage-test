import { useContext, useEffect, useRef, useState } from 'react';

import popupPrimeBtn from '../../assets/images/popup_prime_btn.png';
import IMenuContextProps from '../../interfaces/IMenuContextProps';
import HamburgerIcon from '../HamburguerIcon/HamburguerIcon';
import PrimePopupBtn from '../PrimePopupBtn/PrimePopupBtn';
import MenuContext from '../../context/MenuContext';
import titles from '../../mockedData/navBarData';
import uniqueId from 'uniqueid';
import INavigationBarProps from '../../interfaces/INavigationBarProps';

function NavigationBar({ setIsInputSearchFocused }: INavigationBarProps) {
  const uKey = uniqueId('key');
  const { openMenuModal } = useContext<IMenuContextProps>(
    MenuContext as React.Context<IMenuContextProps>
  );

  const [maxArrayDisplay, setMaxArrayDisplay] = useState<number | undefined>(undefined);
  const [showLoginPopUp, setShowLoginPopUp] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);
  const barContentRef = useRef(null);

  const calculateContentSize = () => {
    const avarageDivSizeInPixels = 112;
    if (barRef.current && barContentRef) {
      const itemQuantity = Math.round(barRef.current.offsetWidth / avarageDivSizeInPixels);
      setMaxArrayDisplay(itemQuantity);
    }
  };

  const handleMouseEnter = () => {
    setIsInputSearchFocused(false);
    setShowLoginPopUp(true);
  };

  const handleMouseLeave = () => {
    setShowLoginPopUp(false);
  };

  window.addEventListener('resize', calculateContentSize);

  useEffect(() => {
    calculateContentSize();
  }, []);

  return (
    <nav className="flex w-full justify-between h-[40px] bg-bgNav text-white pl-3 pr-3 relative ">
      <div className="flex items-center justify-between w-[75.5%] overflow-hidden" ref={barRef}>
        <button
          className="h-full border border-bgNav hover:border hover:border-white"
          onClick={openMenuModal}
        >
          <div className="flex justify-center items-center pl-2">
            <HamburgerIcon size={20} color="white" />
            <span className="font-bold text-[13.5px] pl-1 pr-2">Todos</span>
          </div>
        </button>
        {titles.slice(0, maxArrayDisplay).map((title) => (
          <div key={uKey()}>
            {title === 'Prime' ? (
              <div className="text-nowrap h-full border border-bgNav hover:border hover:border-white z-20">
                <button
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="text-nowrap h-full border-bgNav hover:border-0 hover:border-white"
                >
                  <span className="text-[13.5px] pl-2 pr-2">{title} &#9660;</span>
                </button>
                {showLoginPopUp && (
                  <PrimePopupBtn
                    handleMouseEnter={handleMouseEnter}
                    handleMouseLeave={handleMouseLeave}
                    popupPrimeBtn={popupPrimeBtn}
                  />
                )}
              </div>
            ) : (
              <button
                key={uKey()}
                className="text-nowrap h-full border border-bgNav hover:border hover:border-white"
              >
                <span className="text-[13.5px] pl-2 pr-2">{title}</span>
              </button>
            )}
          </div>
        ))}
      </div>

      <button className="text-[22px] font-bold">Compras Internacionais</button>
    </nav>
  );
}

export default NavigationBar;
