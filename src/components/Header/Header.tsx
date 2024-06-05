import { ChangeEvent, useContext, useEffect, useRef, useState } from 'react';

import ICepConsultContextProps from '../../interfaces/ICepConsultContextProps';
import CepConsultContext from '../../context/CepConsultContext';
import LoginPopupBtn from '../LoginPopupBtn/LoginPopupBtn';
import IHeaderProps from '../../interfaces/IHeaderProps';
import cartIcon from '../../assets/images/cart_icon.png';
import options from '../../mockedData/categoriesMock';
import headerLogo from '../../assets/images/logo.png';
import localLogo from '../../assets/images/local.png';
import SearchInputPopUp from '../SearchInputPopUp/SearchInputPopUp';
import SearchBar from '../SearchBar/SearchBar';

function Header({ handleShadowScreen }: IHeaderProps) {
  const { cepData, openCepMenu } = useContext<ICepConsultContextProps>(
    CepConsultContext as React.Context<ICepConsultContextProps>
  );
  const [showPopup, setShowPopup] = useState(false);
  const [inputSearch, setInputSearch] = useState('');
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [isTextInputSelected, setIsTextInputSelected] = useState(false);
  const [isSelectInputSelected, setIsSelectInputSelected] = useState(false);
  const [inputSize, setInputSize] = useState<number | undefined>(undefined);
  const [isSearchBtnSelected, setIsSearchBtnSelected] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>('Todos');
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const inputContainerRef = useRef<HTMLDivElement>(null);
  const inputSearchRef = useRef<HTMLInputElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  const adjustSelectWidth = () => {
    if (selectRef.current && spanRef.current) {
      const selectedLabel =
        options?.find((option) => option.value === selectedOption)?.value || 'Todos';
      spanRef.current.textContent = selectedLabel;
      const width = spanRef.current.offsetWidth;
      selectRef.current.style.width = `${width + 35}px`;
    }
  };

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  const handleInputSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputSearch(value);
  };

  const onSubmit = () => {
    setSearchHistory((prevState) => [...prevState, inputSearch]);
  };

  const submitWithEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSubmit();
      handleFocusOut();
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
    setIsPopUpVisible(true);
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

  const handleFocusOut = () => {
    handleShadowScreen(false);
    setIsSearchBtnSelected(false);
    setIsSelectInputSelected(false);
    setIsTextInputSelected(false);
    setIsPopUpVisible(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      inputSearchRef.current &&
      !inputSearchRef.current.contains(event.target as Node) &&
      popupRef.current &&
      !popupRef.current.contains(event.target as Node)
    ) {
      handleFocusOut();
    }
  };

  const handleResizeInputSearch = () => {
    if (inputSearchRef) {
      setInputSize(inputSearchRef.current?.offsetWidth);
    }
  };

  useEffect(() => {
    handleResizeInputSearch();
    window.addEventListener('resize', handleResizeInputSearch);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('resize', handleResizeInputSearch);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [inputSearchRef, inputSearch]);

  useEffect(() => {
    if (showPopup) {
      handleShadowScreen(false);
      handleFocusOut();
    }
  }, [showPopup]);

  useEffect(() => {
    adjustSelectWidth();
  }, [selectedOption]);

  return (
    <header className="flex flex-row justify-between items-center w-full h-[60px] text-white bg-bgHeader pr-2 relative">
      <div className="absolute top-0 left-0" ref={popupRef}>
        {isPopUpVisible && (
          <SearchInputPopUp
            handleShadowScreen={handleShadowScreen}
            setIsPopUpVisible={setIsPopUpVisible}
            setInputSearch={setInputSearch}
            onSubmit={onSubmit}
            inputSearchRef={inputSearchRef}
            searchHistory={searchHistory}
            width={inputSize?.toString()}
          />
        )}
      </div>
      <button>
        <img
          className="border border-bgHeader ml-3 h-[48px] hover:border hover:border-white"
          src={headerLogo}
          alt="Logo"
        />
      </button>
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
      <SearchBar
        handleInputSearchChange={handleInputSearchChange}
        onSelectInputFocus={onSelectInputFocus}
        onTextInputFocus={onTextInputFocus}
        onSearchBtnFocus={onSearchBtnFocus}
        submitWithEnter={submitWithEnter}
        handleChange={handleChange}
        onSubmit={onSubmit}
        isSelectInputSelected={isSelectInputSelected}
        isSearchBtnSelected={isSearchBtnSelected}
        isTextInputSelected={isTextInputSelected}
        inputContainerRef={inputContainerRef}
        selectedOption={selectedOption}
        inputSearchRef={inputSearchRef}
        inputSearch={inputSearch}
        selectRef={selectRef}
        spanRef={spanRef}
      />

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
