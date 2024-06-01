import { useContext, useState } from 'react';
import HamburgerIcon from '../HamburguerIcon/HamburguerIcon';
import IMenuContextProps from '../../interfaces/IMenuContextProps';
import MenuContext from '../../context/MenuContext';
import navBarData from '../../mockedData/navBarData.json';
import popupPrimeBtn from '../../assets/images/popup_prime_btn.png';

function NavigationBar() {
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
              key={Math.random()}
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
                <div>
                  <div className="absolute -left-[0px] w-full h-[300vh] bg-bgBlackShadow z-20"></div>
                  <div
                    className="absolute top-full left-[507.5px] rounded transform -translate-x-[58px] w-[340px] bg-white shadow-lg z-30"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="absolute left-[57px] transform -translate-x-1/2 -mt-2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-white border-b-8"></div>
                    <div className="text-center h-[370px] flex items-center justify-center">
                      <img src={popupPrimeBtn} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <button
              key={Math.random()}
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
