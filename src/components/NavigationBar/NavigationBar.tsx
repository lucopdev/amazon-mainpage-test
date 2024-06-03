import { useContext, useState } from 'react';

import popupPrimeBtn from '../../assets/images/popup_prime_btn.png';
import IMenuContextProps from '../../interfaces/IMenuContextProps';
import HamburgerIcon from '../HamburguerIcon/HamburguerIcon';
import PrimePopupBtn from '../PrimePopupBtn/PrimePopupBtn';
import navBarData from '../../mockedData/navBarData.json';
import MenuContext from '../../context/MenuContext';
import uniqueId from 'uniqueid';

function NavigationBar() {
  const uKey = uniqueId('key');
  const { openMenuModal } = useContext<IMenuContextProps>(
    MenuContext as React.Context<IMenuContextProps>
  );
  const [showPopup, setShowPopup] = useState(false);

  const handleMouseEnter = () => {
    setShowPopup(true);
  };

  const handleMouseLeave = () => {
    setShowPopup(false);
  };

  return (
    <nav className="flex w-full justify-between h-[40px] bg-bgNav text-white pl-3 pr-3 relative ">
      <div className="flex items-center justify-between w-[74.5%] overflow-hidden">
        <button
          className="h-full border border-bgNav hover:border hover:border-white"
          onClick={openMenuModal}
        >
          <div className="flex justify-center items-center pl-2">
            <HamburgerIcon size={20} color="white" />
            <span className="font-bold text-[13.5px] pl-1 pr-2">Todos</span>
          </div>
        </button>
        {navBarData.titles.map((title) =>
          title === 'Prime' ? (
            <div
              key={uKey()}
              className="text-nowrap h-full border border-bgNav hover:border hover:border-white z-20 "
            >
              <button
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="text-nowrap h-full border-bgNav hover:border-0 hover:border-white"
              >
                <span className="text-[13.5px] pl-2 pr-2">{title} &#9660;</span>
              </button>
              {showPopup && (
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
          )
        )}
      </div>

      <button className="text-[22px] font-bold">Compras Internacionais</button>
    </nav>
  );
}

export default NavigationBar;
