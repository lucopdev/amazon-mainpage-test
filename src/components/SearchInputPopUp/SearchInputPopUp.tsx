import { useEffect, useState } from 'react';
import ISearchInputPopUpProps from '../../interfaces/ISearchInputPopUpProps';
import uniqueId from 'uniqueid';

function SearchInputPopUp({ searchHistory, width, inputSearchRef }: ISearchInputPopUpProps) {
  const uKey = uniqueId();
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (inputSearchRef.current) {
      const inputRect = inputSearchRef.current.getBoundingClientRect();
      const top = inputRect.bottom + window.scrollY;
      const left = inputRect.left + window.scrollX;

      setPopupPosition({ top, left });
    }
  }, [width, inputSearchRef]);

  const stylePopUp = {
    width: `${width}px`,
    top: `${popupPosition.top + 1}px`,
    left: `${popupPosition.left}px`,
    heigh: searchHistory.length,
  };

  return (
    <div className="absolute bg-white z-50" style={stylePopUp}>
      {searchHistory.map((historyText: string) => (
        <div key={uKey()} className="flex justify-center flex-col p-2 hover:bg-bgLiMenu">
          <div className="flex items-center justify-between">
            <p className="text-black font-bold" key={historyText}>
              {historyText}
            </p>
            <button className="text-black font-bold text-[16px]">X</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SearchInputPopUp;
