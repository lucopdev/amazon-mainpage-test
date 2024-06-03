import { useContext } from 'react';

import userImagePlaceholder from '../../assets/images/user_image_placeholder.png';
import IMenuContextProps from '../../interfaces/IMenuContextProps';
import menuListData from '../../mockedData/menuListData.json';
import MenuContext from '../../context/MenuContext';
import uniqueId from 'uniqueid';

import './menu.css';

function Menu() {
  const uKey = uniqueId('key');
  const { isModalOpen, closeMenuModal } = useContext<IMenuContextProps>(
    MenuContext as React.Context<IMenuContextProps>
  );

  return (
    <div className={`flex ${isModalOpen ? 'menu-open' : 'menu-close'}`}>
      <div className="menu-bar w-[365px] bg-white">
        <div className="bg-bgNav h-[50px]">
          <h1 className="h-full text-[18px] pl-7 flex justify-start items-center font-bold">
            {<img src={userImagePlaceholder} />}
            <span className="pl-2">Olá, faça seu login</span>
          </h1>
        </div>
        <div className="menu-bar-ul overflow-y-scroll">
          {menuListData.data.map((data, index) => (
            <ul key={uKey()}>
              <h1 className="pt-5 pl-9 pb-1 text-[16.8px] text-black font-bold">{data.title}</h1>

              {data.subtitles.map((subtitle) => (
                <li
                  key={uKey()}
                  className="flex items-center text-black text-[13.3px] pl-9 h-11 hover:bg-bgLiMenu"
                >
                  {subtitle}
                </li>
              ))}
              {index != menuListData.data.length - 1 && (
                <div className="w-full size-[1px] bg-gray-300" />
              )}
            </ul>
          ))}
          <div className="h-10"></div>
        </div>
      </div>
      <div className="absolute w-10 top-0 -right-[40px] items-center justify-center">
        <button className="w-full h-[45px] flex items-center justify-center" onClick={closeMenuModal}>
          <h1 className="text-[35px]">x</h1>
        </button>
      </div>
    </div>
  );
}

export default Menu;
