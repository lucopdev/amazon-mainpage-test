import footerLogo from '../../assets/images/footer_logo.png';
import brazilFlag from '../../assets/images/brazil_flag.png';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <div className="w-full flex flex-col bg-bgNav">
      <button
        className="inicio w-full h-[48px] flex items-center justify-center bg-bgFooterBtn text-[13px] hover:bg-bgFooterBtnHover"
        onClick={scrollToTop}
      >
        Voltar ao início
      </button>
      <div className="h-[427.5px] flex flex-col items-center justify-start">
        <div className="w-[1000px] flex items-start justify-between pt-10">
          <div className="w-[280px] h-[298px] flex flex-col items-start">
            <h1 className="text-[15.5px] font-bold mb-2">Conheça-nos</h1>
            <button className="hover:underline text-[13px] mb-2">Sobre a Amazon</button>
            <button className="hover:underline text-[13px] mb-2 flex flex-col">
              <p>Informações</p> corporativas
            </button>
            <button className="hover:underline text-[13px] mb-2">Carreiras</button>
            <button className="hover:underline text-[13px] mb-2 flex flex-col">
              <p>Comunicados à</p>imprensa
            </button>
            <button className="hover:underline text-[13px] mb-2">Comunidade</button>
            <button className="hover:underline text-[13px] mb-2">Acessibilidade</button>
            <button className="hover:underline text-[13px] mb-2">Amazon Science</button>
          </div>

          <div className="w-[350px] flex flex-col items-start">
            <h1 className="text-[15.5px] font-bold mb-2">Ganhe dinheiro conosco</h1>
            <button className="hover:underline text-[13px] mb-2">Venda na Amazon</button>
            <button className="hover:underline text-[13px] mb-2 flex flex-col">
              <p>Proteja e construa a sua</p>marca
            </button>
            <button className="hover:underline text-[13px] mb-2">Publique seus livros</button>
            <button className="hover:underline text-[13px] mb-2">Seja um associado</button>
            <button className="hover:underline text-[13px] mb-2">Anuncie seus produtos</button>
          </div>

          <div className="w-[250px] flex flex-col items-start">
            <h1 className="text-[15.5px] font-bold mb-2">Pagamento</h1>
            <button className="hover:underline text-[13px] mb-2 flex flex-col">
              <p>Meios de</p>Pagamento
            </button>
            <button className="hover:underline text-[13px] mb-2 flex flex-col">
              <p>Compre com</p>Pontos
            </button>
            <button className="hover:underline text-[13px] mb-2 flex flex-col">
              <p>Cartão de</p>Crédito
            </button>
          </div>

          <div className="w-[250px] flex flex-col items-start">
            <h1 className="text-[15.5px] font-bold mb-2">Deixe-nos ajudar você</h1>
            <button className="hover:underline text-[13px] mb-2">Sua conta</button>
            <button className="hover:underline text-[13px] mb-2 flex flex-col">
              Frete e prazo de entrega
            </button>
            <button className="hover:underline text-[13px] mb-2">Devoluções e reembolsos</button>
            <button className="hover:underline text-[13px] mb-2 flex flex-col">
              <p>Gerencie seu conteúdo e</p>dispositivos
            </button>
            <button className="hover:underline text-[13px] mb-2">Ajuda</button>
          </div>
        </div>
        <div className="w-full size-[1px] bg-gray-700" />
        <div className="flex items-center justify-between w-[270px] h-full mr-[10px]">
          <img className="mt-[10px]" src={footerLogo} />
          <button className="flex items-center justify-start border border-gray-500 rounded pt-[5px] pb-[4px] pl-[5px] pr-[27px] text-[12px]">
            <img src={brazilFlag} />
            Brasil
          </button>
        </div>
      </div>
      <div className="h-[250px] pt-1 pb-7 bg-bgFooter flex flex-col items-center justify-between">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <button className="text-[11.5px] hover:underline">Condições de Uso</button>
            <p className="text-[19px] text-gray-400">|</p>
            <button className="text-[11.5px] hover:underline">Notificação de Privacidade</button>
            <p className="text-[19px] text-gray-400">|</p>
            <button className="text-[11.5px] hover:underline">Cookies</button>
            <p className="text-[19px] text-gray-400">|</p>
            <button className="text-[11.5px] hover:underline">
              Anúncios Baseados em Interesse
            </button>
          </div>
          <p className="text-[11.5px]">&copy; 2021-2024 Amazon.com, Inc. ou suas afiliadas</p>
        </div>
        <p className="text-[11.5px] text-gray-400">
          Amazon Serviços de Varejo do Brasil Ltda. | CNPJ 15.436.940/0001-03
        </p>
        <p className="text-[11.5px] text-gray-400">
          Av. Juscelino Kubitschek, 20411, Torre E, 18º andar - São Paulo CEP: 04543-011|{' '}
          <button className="text-white hover:underline">Fale conosco</button> |
          ajuda-amazon@amazon.com.br
        </p>
        <p className="text-[11.5px] text-gray-400">
          Formas de pagamento aceitas: cartões de crédito (Visa, MasterCard, Elo e American
          Express), cartões de débito (Visa e Elo), Boleto e Pix.
        </p>
      </div>
    </div>
  );
}

export default Footer;
