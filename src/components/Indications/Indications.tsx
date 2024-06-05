import { useContext } from 'react';
import IApiContextProps from '../../interfaces/IApiContextProps';
import FooterSlider from '../FooterSlider/FooterSlider';
import ApiContext from '../../context/ApiContext';

function Indications() {
  const { products } = useContext<IApiContextProps>(ApiContext as React.Context<IApiContextProps>);

  return (
    <div className="w-full h-[675px] pt-11 pl-[1px] pr-[1px] pb-[20px] flex flex-col bg-white items-center justify-evenly">
      <div className="w-full h-full border-[1px] border-gray-300 rounded-md flex flex-col items-start justify-evenly">
        <h1 className="text-black max-tablet:w-[580px] font-bold text-[16.8px] pt-[9px] pl-[28px] ">
          Os clientes que viram os produtos em seu histórico de navegação também viram
        </h1>
        <div className="w-full h-[480px] rounded-md flex flex-col items-center justify-center">
          <div className="w-full h-full mt-[5px] mb-[5px] flex items-center justify-center desktop:w-[1460px] max-desktop:w-[98.5%]">
            <FooterSlider products={products} />
          </div>
        </div>
        <div className="w-full h-[1px] bg-gray-200 text-black"></div>
        <div className="w-full h-[140px] flex flex-col items-center justify-center">
          <p className="text-black text-[12px] pb-1">Veja recomendações personalizadas</p>
          <button className="text-black text-[11px] font-bold bg-yellow-400 w-[220px] h-[28px] border border-orange-400 rounded">
            Faça seu login
          </button>
          <button>
            <div className="flex items-center pt-1">
              <p className="text-black text-[10.5px] pr-1">Cliente novo?</p>
              <span className="text-sky-700 text-[10.5px]">Comece aqui.</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Indications;
