import { ReactNode, useMemo, useState } from 'react';
import CepConsultContext from '../context/CepConsultContext';
import ICepData from '../interfaces/ICepData';

interface CepConsultProvider {
  children: ReactNode;
}

function CepConsultProvider({ children }: CepConsultProvider) {
  const [cepData, setCepData] = useState<ICepData | null>(null);
  const [isCepConsultOpen, setIsCepConsultOpen] = useState<boolean>(false);

  const openCepMenu = () => {
    setIsCepConsultOpen(true);
  };

  const closeCepMenu = () => {
    setIsCepConsultOpen(false);
  };

  const values = useMemo(
    () => ({
      cepData,
      setCepData,
      isCepConsultOpen,
      setIsCepConsultOpen,
      openCepMenu,
      closeCepMenu,
    }),
    [cepData, setCepData, isCepConsultOpen, setIsCepConsultOpen]
  );

  return <CepConsultContext.Provider value={values}>{children}</CepConsultContext.Provider>;
}

export default CepConsultProvider;
