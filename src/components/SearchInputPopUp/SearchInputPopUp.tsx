import { useEffect, useState } from 'react';
import ISearchInputPopUpProps from '../../interfaces/ISearchInputPopUpProps';
import uniqueId from 'uniqueid';

function SearchInputPopUp({
  searchHistory,
  width,
  inputSearchRef,
  setIsPopUpVisible,
  setSearchHistory,
  setInputSearch,
  handleShadowScreen,
  onSubmit,
}: ISearchInputPopUpProps) {
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
    top: `${popupPosition.top + 0.5}px`,
    left: `${popupPosition.left}px`,
    heigh: searchHistory.length,
  };

  const sendHistoryToInput = (event: React.MouseEvent<HTMLParagraphElement>) => {
    setInputSearch(event.currentTarget.innerHTML);
    handleShadowScreen(false);
    setIsPopUpVisible(false);
    onSubmit();
  };

  const removeHistory = (event: React.MouseEvent<HTMLElement>) => {
    const parent = event.currentTarget.parentElement;
    if (parent && parent.firstChild && parent.firstChild instanceof HTMLElement) {
      const { innerText } = parent.firstChild;

      const historyFound = searchHistory.filter((historyText) => historyText !== innerText);
      setSearchHistory(historyFound);
    }
  };

  return (
    <div className="absolute bg-white z-50" style={stylePopUp}>
      {searchHistory.map((historyText: string) => (
        <div key={uKey()} className="flex justify-center flex-col hover:bg-bgLiMenu">
          <div className="flex items-center justify-between">
            <p
              className="text-black font-bold text-[14px] w-full h-full p-2"
              key={historyText}
              onClick={(event) => sendHistoryToInput(event)}
            >
              {historyText}
            </p>
            <button
              className="text-black w-[30px] h-[30px] font-bold text-[16px]"
              onClick={(event) => removeHistory(event)}
            >
              X
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SearchInputPopUp;
