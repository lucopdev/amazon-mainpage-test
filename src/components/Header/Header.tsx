import { ChangeEvent, useContext, useEffect, useRef, useState } from 'react';
import IApiContextProps from '../../interfaces/IApiContextProps';
import magGlass from '../../assets/images/mag_glass_icon.png';
import cartIcon from '../../assets/images/cart_icon.png';
import headerLogo from '../../assets/images/logo.png';
import localLogo from '../../assets/images/local.png';
import ApiContext from '../../context/ApiContext';

import './header.css';

const Header: React.FC = () => {
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
              <option key={Math.random()} className="text-[13px]" value={option.name}>
                {option.name}
              </option>
            ))}
          </select>
          <span
            ref={spanRef}
            className="absolute top-0 left-0 invisible text-[11px] bg-red-500 whitespace-nowrap"
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
          <div>
            <div className="absolute -right-[0px] w-full h-[300vh] bg-bgBlackShadow z-20"></div>
            <div
              className="absolute right-[30px] rounded transform -translate-x-[58px] bg-white shadow-lg z-30"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="absolute left-[365.5px] transform -translate-x-1/2 -mt-2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-white border-b-8"></div>
              <div className="w-[500px] h-[422px] flex flex-col items-center justify-between p-[15px]">
                <div className="w-full h-full flex flex-col items-center justify-between">
                  <button className="bg-yellow-400 w-[220px] h-[40px] rounded-md">
                    <p className="text-[12px] text-black hover:underline hover:decoration-orange-600">Faça seu login</p>
                  </button>
                  <div className="flex items-center m-2 justify-center">
                    <span className="text-black text-[11px] flex items-center justify-center">
                      Cliente novo?
                    </span>
                    <span className="flex flex-col items-start text-black text-[11px] pl-1 hover:underline hover:text-orange-500">
                      Comece aqui
                    </span>
                  </div>
                  <div className=" w-full flex items-center justify-between">
                    <div className="w-full h-[1px] bg-slate-200"></div>
                  </div>
                  <div className="w-full h-full grid grid-cols-[220px_20px_225px] pt-2 pl-2">
                    <div className="pt-1 pl-1">
                      <p className="text-black font-bold pb-2">Suas listas</p>
                      <p className="flex flex-col items-start text-black text-[12.5px] pt-[2px] hover:underline hover:text-orange-500">
                        Crie uma Lista de desejo
                      </p>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="w-[1px] h-full bg-slate-200"></div>
                    </div>
                    <div className="flex flex-col items-start justify-between pl-2 pt-1">
                      <p className="text-black font-bold pb-1">Sua conta</p>
                      <button>
                        <p className="flex flex-col items-start text-black text-[12px] pt-[2px] hover:underline hover:text-orange-500">
                          Sua conta
                        </p>
                      </button>
                      <button>
                        <p className="flex flex-col items-start text-black text-[12px] pt-[2px] hover:underline hover:text-orange-500">
                          Seus pedidos
                        </p>
                      </button>
                      <button>
                        <p className="flex flex-col items-start text-black text-[12px] pt-[2px] hover:underline hover:text-orange-500">
                          Sua lista de desejo
                        </p>
                      </button>
                      <button>
                        <p className="flex flex-col items-start text-black text-[12px] pt-[2px] hover:underline hover:text-orange-500">
                          Recomendados para você
                        </p>
                      </button>
                      <button>
                        <p className="flex flex-col items-start text-black text-[12px] pt-[2px] hover:underline hover:text-orange-500">
                          Programe e Poupe
                        </p>
                      </button>
                      <button>
                        <p className="flex flex-col items-start text-black text-[12px] pt-[2px] hover:underline hover:text-orange-500">
                          Sua assinatura Prime
                        </p>
                      </button>
                      <button>
                        <p className="flex flex-col items-start text-black text-[12px] pt-[2px] hover:underline hover:text-orange-500">
                          Inscrições e assinaturas
                        </p>
                      </button>
                      <button>
                        <p className="flex flex-col items-start text-black text-[12px] pt-[2px] hover:underline hover:text-orange-500">
                          Gerencie seu conteúdo e <span className="text-[12px]">dispositivos</span>
                        </p>
                      </button>
                      <button>
                        <p className="flex flex-col items-start text-black text-[12px] pt-[2px] hover:underline hover:text-orange-500">
                          Seu Prime Video
                        </p>
                      </button>
                      <button>
                        <p className="flex flex-col items-start text-black text-[12px] pt-[2px] hover:underline hover:text-orange-500">
                          Seu Kindle Unlimited
                        </p>
                      </button>
                      <button>
                        <p className="flex flex-col items-start text-black text-[12px] pt-[2px] hover:underline hover:text-orange-500">
                          Seu Amazon Photos
                        </p>
                      </button>
                      <button>
                        <p className="flex flex-col items-start text-black text-[12px] pt-[2px] hover:underline hover:text-orange-500">
                          Seus aplicativos e dispositivos
                        </p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <button className="border border-bgHeader hover:border hover:border-white h-[48px] pl-3 pr-3">
        <p className="text-[11.5px]">Devoluções</p>
        <p className="text-[13px] font-bold">e Pedidos</p>
      </button>
      <button className="border border-bgHeader hover:border hover:border-white h-[48px]">
        <img src={cartIcon} alt="Cart" />
      </button>
    </header>
  );
};

export default Header;
