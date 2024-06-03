import { ReactNode, useMemo, useState } from 'react';
import MenuContext from '../context/MenuContext';

interface MenuProviderProps {
  children: ReactNode;
}

function MenuProvider({ children }: MenuProviderProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openMenuModal = () => {
    setIsModalOpen(true);
  };

  const closeMenuModal = () => {
    setIsModalOpen(false);
  };

  const values = useMemo(
    () => ({
      isModalOpen,
      setIsModalOpen,
      openMenuModal,
      closeMenuModal,
    }),
    [isModalOpen, setIsModalOpen]
  );

  return <MenuContext.Provider value={values}>{children}</MenuContext.Provider>;
}

export default MenuProvider;
