import { createContext } from 'react';
import ICepConsultContextProps from '../interfaces/ICepConsultContextProps';

const CepConsultContext = createContext<ICepConsultContextProps | undefined>(undefined);

export default CepConsultContext;
