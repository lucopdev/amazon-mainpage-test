import { ChangeEvent, useContext, useEffect, useRef, useState } from 'react';

import ICepConsultContextProps from '../../interfaces/ICepConsultContextProps';
import CepConsultContext from '../../context/CepConsultContext';
import magGlass from '../../assets/images/mag_glass_icon.png';
import LoginPopupBtn from '../LoginPopupBtn/LoginPopupBtn';
import IHeaderProps from '../../interfaces/IHeaderProps';
import cartIcon from '../../assets/images/cart_icon.png';
import options from '../../mockedData/categoriesMock';
import headerLogo from '../../assets/images/logo.png';
import localLogo from '../../assets/images/local.png';
import uniqueId from 'uniqueid';

function Header({ handleShadowScreen }: IHeaderProps) {
  const uKey = uniqueId('key');

  const { cepData, openCepMenu } = useContext<ICepConsultContextProps>(
    CepConsultContext as React.Context<ICepConsultContextProps>
  );

  const [isTextInputSelected, setIsTextInputSelected] = useState(false);
  const [isSelectInputSelected, setIsSelectInputSelected] = useState(false);
  const [isSearchBtnSelected, setIsSearchBtnSelected] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>('Todos');
  const [showPopup, setShowPopup] = useState(false);
  const selectRef = useRef<HTMLSelectElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);
  const inputContainerRef = useRef<HTMLDivElement>(null);

  const adjustSelectWidth = () => {
    if (selectRef.current && spanRef.current) {
      const selectedLabel =
        options?.find((option) => option.value === selectedOption)?.value || 'Todos';
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

  const onTextInputFocus = () => {
    handleShadowScreen(true);
    setIsTextInputSelected(true);
    setIsSelectInputSelected(false);
    setIsSearchBtnSelected(false);
  };

  const onSelectInputFocus = () => {
    setIsSelectInputSelected(true);
    setIsTextInputSelected(false);
    setIsSearchBtnSelected(false);
  };

  const onSearchBtnFocus = () => {
    setIsSearchBtnSelected(true);
    setIsSelectInputSelected(false);
    setIsTextInputSelected(false);
  };

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  const handleFocusOut = () => {
    handleShadowScreen(false);
    setIsSearchBtnSelected(false);
    setIsSelectInputSelected(false);
    setIsTextInputSelected(false);
  };

  useEffect(() => {
    if (showPopup) {
      handleShadowScreen(false);
      handleFocusOut();
    }
  }, [showPopup]);

  useEffect(() => {
    adjustSelectWidth();
  }, [selectedOption]);

  useEffect(() => {
    const inputContainer = inputContainerRef.current;

    inputContainer && inputContainer.addEventListener('focusout', handleFocusOut);

    return () => {
      inputContainer && inputContainer.removeEventListener('focusout', handleFocusOut);
    };
  }, []);

  return (
    <header className="flex flex-row justify-between items-center w-full h-[60px] text-white bg-bgHeader pr-2 relative">
      <img
        className="border border-bgHeader ml-3 h-[48px] hover:border hover:border-white"
        src={headerLogo}
        alt="Logo"
      />
      <button
        className="flex border border-bgHeader hover:border hover:border-white h-[48px] mr-5 pl-3 pr-5 text-left"
        onClick={openCepMenu}
      >
        <img className="mt-[15px]" src={localLogo} />
        <div>
          <p className="text-[12px]">
            {cepData ? 'Enviar para' : 'A entrega será feita em Bela Vista 01319900'}
          </p>
          <span className="font-bold text-[14px]">{cepData ? cepData.cep : 'Atualizar Local'}</span>
        </div>
      </button>
      <div
        className={`input-container flex flex-grow h-[40px] items-center ${
          isTextInputSelected &&
          'outline-offset-0 outline-none outline-[3px] outline-orange-400 border-none rounded'
        }`}
        ref={inputContainerRef}
      >
        <div
          className={`custom-select-container flex h-[40px] items-center relative ${
            isSelectInputSelected &&
            'outline-offset-0 outline-none outline-[3px] outline-orange-400 border-none rounded-tl rounded-bl'
          }`}
          onFocus={onSelectInputFocus}
        >
          <select
            className="h-full custom-select pl-3 pr-2 text-[11px] bg-selectCategoryBtn text-darkTextColor rounded-bl-[4px] rounded-tl-[4px] border-r-[1px] border-gray-300 hover:bg-hoverSelectCategoryBtn hover:text-black"
            value={selectedOption}
            onChange={handleChange}
            ref={selectRef}
          >
            {options?.map((option) => (
              <option key={uKey()} className="pr-3 text-[13.5px]" value={option.value}>
                {option.label}
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
          className="flex-grow h-full text-[14px] placeholder-slate-600 pl-[6px] border-none outline-none ring-0 text-black"
          placeholder="Pesquisa Amazon.com.br"
          onFocus={onTextInputFocus}
        />
        <button
          className={`w-[40px] h-full bg-searchBtn rounded-tr-[4px] rounded-br-[4px] ${
            isSearchBtnSelected &&
            'outline-offset-0 outline-none outline-[3px] outline-orange-400 border-none rounded-tr rounded-br'
          }`}
          onFocus={onSearchBtnFocus}
        >
          <img className="rounded" src={magGlass} />
        </button>
      </div>

      <div className="border border-bgHeader hover:border hover:border-white h-[48px] ml-5 pl-1 pr-1 z-30">
        <button
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="h-full text-start border-bgNav hover:border-0 hover:border-white"
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
}

export default Header;
