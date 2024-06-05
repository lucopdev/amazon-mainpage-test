import uniqueId from 'uniqueid';
import options from '../../mockedData/categoriesMock';
import magGlass from '../../assets/images/mag_glass_icon.png';
import ISearchBarProps from '../../interfaces/ISearchBarProps';

function SearchBar({
  handleInputSearchChange,
  onSelectInputFocus,
  onSearchBtnFocus,
  onTextInputFocus,
  submitWithEnter,
  handleChange,
  onSubmit,
  isSearchBtnSelected,
  inputContainerRef,
  inputSearchRef,
  inputSearch,
  selectRef,
  spanRef,
  isSelectInputSelected,
  isTextInputSelected,
  selectedOption,
}: ISearchBarProps) {
  const uKey = uniqueId();
  return (
    <div
      className={`input-container flex flex-grow h-[40px] items-center ${
        isTextInputSelected &&
        'outline-offset-0 outline-none outline-[3px] outline-orange-400 border-none rounded'
      }`}
      ref={inputContainerRef}
    >
      <div
        className={`custom-select-container flex h-[40px] items-center relative ${
          isSelectInputSelected &&
          'outline-offset-0 outline-none outline-[3px] outline-orange-400 border-none rounded-tl rounded-bl'
        }`}
        onFocus={onSelectInputFocus}
      >
        <select
          className="h-full custom-select pl-3 pr-2 text-[11px] bg-selectCategoryBtn text-darkTextColor rounded-bl-[4px] rounded-tl-[4px] border-r-[1px] border-gray-300 hover:bg-hoverSelectCategoryBtn hover:text-black"
          value={selectedOption}
          onChange={handleChange}
          ref={selectRef}
        >
          {options?.map((option) => (
            <option key={uKey()} className="pr-3 text-[13.5px]" value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <span
          ref={spanRef}
          className="absolute top-0 left-0 invisible text-[11px] whitespace-nowrap"
        ></span>
      </div>
      <input
        ref={inputSearchRef}
        type="text"
        className="flex-grow h-full text-[14px] placeholder-slate-600 pl-[6px] border-none outline-none ring-0 text-black"
        autoComplete="off"
        placeholder="Pesquisa Amazon.com.br"
        value={inputSearch}
        name="inputSearch"
        onChange={(event) => handleInputSearchChange(event)}
        onKeyDown={(event) => submitWithEnter(event)}
        onFocus={onTextInputFocus}
      />
      <button
        className={`w-[40px] h-full bg-searchBtn rounded-tr-[4px] rounded-br-[4px] ${
          isSearchBtnSelected &&
          'outline-offset-0 outline-none outline-[3px] outline-orange-400 border-none rounded-tr rounded-br'
        }`}
        onFocus={onSearchBtnFocus}
        onClick={onSubmit}
      >
        <img className="rounded" src={magGlass} />
      </button>
    </div>
  );
}

export default SearchBar;
