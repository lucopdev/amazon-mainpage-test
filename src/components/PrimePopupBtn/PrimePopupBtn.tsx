import IPrimePopupBtn from '../../interfaces/IPrimePopupBtnProps';

function PrimePopupBtn({ handleMouseEnter, handleMouseLeave, popupPrimeBtn }: IPrimePopupBtn) {
  return (
    <div>
      <div className="absolute -left-[0px] w-full h-[300vh] bg-bgBlackShadow z-20"></div>
      <div
        className="absolute top-full left-[507.5px] rounded transform -translate-x-[58px] bg-white shadow-lg z-20"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="absolute left-[57px] transform -translate-x-1/2 -mt-2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-white border-b-8"></div>
        <div className="text-center w-[340px] h-[370px] flex items-center justify-center">
          <img src={popupPrimeBtn} />
        </div>
      </div>
    </div>
  );
}

export default PrimePopupBtn;
