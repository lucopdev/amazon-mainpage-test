import { useEffect, useState } from 'react';
import ISearchInputPopUpProps from '../../interfaces/ISearchInputPopUpProps';

function SearchInputPopUp({ searchHistory, width, inputSearchRef }: ISearchInputPopUpProps) {
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
        <p className="text-black p-2 pb-2 font-bold" key={historyText}>
          {historyText}
        </p>
      ))}
    </div>
  );
}

export default SearchInputPopUp;
