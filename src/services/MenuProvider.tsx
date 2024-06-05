import { ReactNode, useMemo, useState } from 'react';
import MenuContext from '../context/MenuContext';

interface MenuProviderProps {
  children: ReactNode;
}

function MenuProvider({ children }: MenuProviderProps) {
  const [isMenuModalOpen, setIsMenuModalOpen] = useState<boolean>(false);

  const openMenuModal = () => {
    setIsMenuModalOpen(true);
  };

  const closeMenuModal = () => {
    setIsMenuModalOpen(false);
  };

  const values = useMemo(
    () => ({
      isMenuModalOpen,
      setIsMenuModalOpen,
      openMenuModal,
      closeMenuModal,
    }),
    [isMenuModalOpen, setIsMenuModalOpen]
  );

  return <MenuContext.Provider value={values}>{children}</MenuContext.Provider>;
}

export default MenuProvider;
