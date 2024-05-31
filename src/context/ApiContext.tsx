import { createContext } from 'react';
import IApiContextProps from '../interfaces/IApiContextProps';

const ApiContext = createContext<IApiContextProps | undefined>(undefined);

export default ApiContext;
