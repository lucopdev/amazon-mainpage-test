import { ChangeEvent, useContext, useEffect, useRef, useState } from 'react';

import IApiContextProps from '../../interfaces/IApiContextProps';
import magGlass from '../../assets/images/mag_glass_icon.png';
import LoginPopupBtn from '../LoginPopupBtn/LoginPopupBtn';
import cartIcon from '../../assets/images/cart_icon.png';
import headerLogo from '../../assets/images/logo.png';
import localLogo from '../../assets/images/local.png';
import ApiContext from '../../context/ApiContext';
import uniqueId from 'uniqueid';

import './header.css';

const Header: React.FC = () => {
  const uKey = uniqueId('key');
  const { categories } = useContext<IApiContextProps>(
    ApiContext as React.Context<IApiContextProps>
  );

  const [selectedOption, setSelectedOption] = useState<string>('Todos');
  const [showPopup, setShowPopup] = useState(false);
  const selectRef = useRef<HTMLSelectElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);

  const adjustSelectWidth = () => {
    if (selectRef.current && spanRef.current) {
      const selectedLabel =
        categories?.find((option) => option.name === selectedOption)?.name || 'Todos';
      spanRef.current.textContent = selectedLabel;
      const width = spanRef.current.offsetWidth;
      selectRef.current.style.width = `${width + 35}px`;
    }
  };

  const handleMouseEnter = () => {
    setShowPopup(true);
  };

  const handleMouseLeave = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    adjustSelectWidth();
  }, [selectedOption]);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <header className="flex flex-row justify-between items-center w-full h-[60px] text-white bg-bgHeader pr-2 relative">
      <img
        className="border border-bgHeader ml-3 h-[48px] hover:border hover:border-white"
        src={headerLogo}
        alt="Logo"
      />
      <button className="flex border border-bgHeader hover:border hover:border-white h-[48px] pl-3 pr-5 text-left">
        <img className="mt-[15px]" src={localLogo} />
        <div>
          <p className="text-[12px]">A entrega será feita em Bela Vista 01319900</p>
          <span className="font-bold text-[14px]">Atualizar Local</span>
        </div>
      </button>
      <div className="flex flex-grow h-[40px] pl-3 pr-3 items-center">
        <div className="custom-select-container flex h-[40px] items-center relative">
          <select
            className="h-full custom-select pl-3 pr-2 text-[11px] bg-selectCategoryBtn text-darkTextColor rounded-bl-[4px] rounded-tl-[4px] border-r-[1px] border-gray-300 hover:bg-hoverSelectCategoryBtn hover:text-black"
            value={selectedOption}
            onChange={handleChange}
            ref={selectRef}
          >
            <option
              className="custom-options text-[13px]"
              label="Todos os departamentos"
              value="Todos os departamentos"
            >
              Todos os departamentos
            </option>
            {categories?.map((option) => (
              <option key={uKey()} className="text-[13px]" value={option.name}>
                {option.name}
              </option>
            ))}
          </select>
          <span
            ref={spanRef}
            className="absolute top-0 left-0 invisible text-[11px] whitespace-nowrap"
          ></span>
        </div>
        <input
          type="text"
          className="flex-grow h-full text-[15px] placeholder-slate-600 placeholder pl-[6px]"
          placeholder="Pesquisa Amazon.com.br"
        />
        <button className="h-full bg-searchBtn rounded-tr-[4px] pl-[1.5px] rounded-br-[4px] text-black">
          <img src={magGlass} alt="Search" />
        </button>
      </div>

      <div className="border border-bgHeader hover:border hover:border-white h-[48px] pl-1 pr-1 z-30">
        <button
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="text-nowrap h-full border-bgNav hover:border-0 hover:border-white"
        >
          <p className="text-[11.5px]">Olá, faça seu login</p>
          <p className="text-[13px] font-bold">Contas e Listas &#9660;</p>
        </button>
        {showPopup && (
          <LoginPopupBtn handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} />
        )}
      </div>

      <button className="border border-bgHeader hover:border hover:border-white h-[48px] pl-3 pr-3">
        <p className="text-[11.5px]">Devoluções</p>
        <p className="text-[13px] font-bold">e Pedidos</p>
      </button>
      <button className="border border-bgHeader hover:border hover:border-white h-[48px]">
        <img src={cartIcon} alt="Carrinho" />
      </button>
    </header>
  );
};

export default Header;
