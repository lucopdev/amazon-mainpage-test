import ICepData from './ICepData';

export default interface ICepConsultContextProps {
  cepData: ICepData | null;
  setCepData: React.Dispatch<React.SetStateAction<ICepData | null>>;
  isCepConsultOpen: boolean;
  setIsCepConsultOpen: React.Dispatch<React.SetStateAction<boolean>>;
  openCepMenu: () => void;
  closeCepMenu: () => void;
}
