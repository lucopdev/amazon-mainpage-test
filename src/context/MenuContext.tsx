import { createContext } from 'react';
import IMenuContextProps from '../interfaces/IMenuContextProps';

const MenuContext = createContext<IMenuContextProps | undefined>(undefined);

export default MenuContext;
