import ILoginPopupBtnProps from '../../interfaces/ILoginPopupBtnProps';

function LoginPopupBtn({ handleMouseEnter, handleMouseLeave }: ILoginPopupBtnProps) {
  return (
    <div>
      <div className="absolute -right-[0px] w-full h-[300vh] bg-bgBlackShadow z-10"></div>
      <div
        className="absolute right-[30px] rounded transform -translate-x-[58px] bg-white shadow-lg z-10"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="absolute left-[365.5px] transform -translate-x-1/2 -mt-2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-white border-b-8"></div>
        <div className="w-[500px] h-[422px] flex flex-col items-center justify-between p-[15px]">
          <div className="w-full h-full flex flex-col items-center justify-between">
            <button className="bg-yellow-400 w-[220px] h-[40px] rounded-md">
              <p className="text-[12px] text-black hover:underline hover:decoration-orange-600">
                Faça seu login
              </p>
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
  );
}

export default LoginPopupBtn;
