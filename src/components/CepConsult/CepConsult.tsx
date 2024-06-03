import { ChangeEvent, useContext, useState } from 'react';
import { getCep } from '../../services/api';
import ICepConsultContextProps from '../../interfaces/ICepConsultContextProps';
import CepConsultContext from '../../context/CepConsultContext';

function CepConsult() {
  const { setCepData, closeCepMenu } = useContext<ICepConsultContextProps>(
    CepConsultContext as React.Context<ICepConsultContextProps>
  );

  const [cepInput, setCepInput] = useState({
    firstDigits: '',
    lastDigits: '',
  });

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCepInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitCep = async () => {
    const data = await getCep(cepInput.firstDigits + cepInput.lastDigits);
    
    setCepData(data);
    closeCepMenu();
  };

  return (
    <div className="absolute top-[34%] left-auto z-50">
      <div className="bg-white w-[370px] h-[235px] mt-5 rounded-md flex flex-col items-center justify-between">
        <div className="w-full mt-0 p-4 pl-5">
          <h1 className="text-black font-bold">Escolha sua localização</h1>
        </div>
        <div className="w-full h-[1px] bg-slate-300"></div>
        <div className="w-full h-full p-5 flex flex-col items-center justify-between">
          <p className="text-slate-600 text-[11px]">
            As opções e velocidade de entrega podem variar de acordo com a região
          </p>
          <button className="w-full h-[30px] bg-yellow-400 text-black text-[12px] rounded-md">
            Faça login
          </button>
          <div className="w-full grid grid-cols-[80px_151px_80px] gap-2 items-center justify-center">
            <div className="w-[80px] h-[1px] bg-slate-300"></div>
            <span className="text-slate-600 text-[11px]">ou insira um CEP do Brasil</span>
            <div className="w-[80px] h-[1px] bg-slate-300"></div>
          </div>
          <div className="w-full flex items-center justify-between">
            <input
              className="w-[120px] h-[30px] p-2 text-[14px] text-black border border-black rounded-[5px]"
              type="text"
              maxLength={5}
              value={cepInput.firstDigits}
              name="firstDigits"
              onChange={(event) => handleChangeInput(event)}
            />
            <span className="text-black">-</span>
            <input
              className="w-[70px] h-[30px] p-2 text-[14px] text-black border border-black rounded-[5px]"
              type="text"
              maxLength={3}
              value={cepInput.lastDigits}
              name="lastDigits"
              onChange={(event) => handleChangeInput(event)}
            />
            <button
              className="border border-slate-300 rounded-md text-black text-[12px] h-[32px] pl-5 pr-5"
              onClick={submitCep}
            >
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CepConsult;
