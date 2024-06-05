import { RefObject } from 'react';

export default interface ISearchInputPopUpProps {
  searchHistory: string[];
  width: string | undefined;
  inputSearchRef: RefObject<HTMLInputElement>;
  setSearchHistory: React.Dispatch<React.SetStateAction<string[]>>;
  setIsPopUpVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setInputSearch: React.Dispatch<React.SetStateAction<string>>;
  handleShadowScreen: (bool: boolean) => void;
  onSubmit: () => void;
}
