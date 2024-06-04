import { RefObject } from 'react';

export default interface ISearchInputPopUpProps {
  searchHistory: string[];
  width: string | undefined;
  inputSearchRef: RefObject<HTMLInputElement>
}
