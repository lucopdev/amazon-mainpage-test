import { useContext } from 'react';
import HamburgerIcon from '../HamburguerIcon/HamburguerIcon';
import IMenuContextProps from '../../interfaces/IMenuContextProps';
import MenuContext from '../../context/MenuContext';
import navBarData from '../../mockedData/navBarData.json';

function NavigationBar() {
  const { openMenuModal } = useContext<IMenuContextProps>(
    MenuContext as React.Context<IMenuContextProps>
  );
  return (
    <nav className="flex w-full justify-between h-[40px] bg-bgNav text-white pl-3 pr-3">
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

        {navBarData.titles.map((title, index) => (
          <button
            key={index}
            className="text-nowrap h-full border border-bgNav hover:border hover:border-white"
          >
            <span className="text-[13.5px] pl-2 pr-2">
              {title === 'Prime' ? <span>{title} &#9660;</span> : title}
            </span>
          </button>
        ))}
      </div>

      <button className="text-[22px] font-bold">Compras Internacionais</button>
    </nav>
  );
}

export default NavigationBar;
