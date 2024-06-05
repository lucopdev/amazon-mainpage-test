import { ChangeEvent, ChangeEventHandler, LegacyRef } from 'react';

export default interface ISearchBarProps {
  handleInputSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
  submitWithEnter: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  handleChange: ChangeEventHandler<HTMLSelectElement>;
  onSelectInputFocus: () => void;
  onTextInputFocus: () => void;
  onSearchBtnFocus: () => void;
  onSubmit: () => void;
  inputContainerRef: LegacyRef<HTMLDivElement> | undefined;
  inputSearchRef: LegacyRef<HTMLInputElement>;
  selectRef: LegacyRef<HTMLSelectElement>;
  spanRef: LegacyRef<HTMLSpanElement>;
  isTextInputSelected: boolean;
  isSelectInputSelected: boolean;
  isSearchBtnSelected: boolean;
  selectedOption: string;
  inputSearch: string;
}
