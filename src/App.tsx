import React, { Suspense, lazy, useContext, useEffect } from 'react';

import ICepConsultContextProps from './interfaces/ICepConsultContextProps';
import NavigationBar from './components/NavigationBar/NavigationBar';
import IMenuContextProps from './interfaces/IMenuContextProps';
import CepConsultContext from './context/CepConsultContext';
import CepConsult from './components/CepConsult/CepConsult';
import MenuContext from './context/MenuContext';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';

const ProductComponent = lazy(() => import('./components/ProductComponent/ProductComponent'));
const Footer = lazy(() => import('./components/Footer/Footer'));

function App() {
  const { isModalOpen, closeMenuModal } = useContext<IMenuContextProps>(
    MenuContext as React.Context<IMenuContextProps>
  );
  const { isCepConsultOpen, closeCepMenu } = useContext<ICepConsultContextProps>(
    CepConsultContext as React.Context<ICepConsultContextProps>
  );

  useEffect(() => {
    if (isModalOpen || isCepConsultOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isModalOpen, isCepConsultOpen]);

  return (
    <main>
      <div className="flex flex-col items-center min-w-[1200px]">
        <Header />
        <NavigationBar />
        <Suspense fallback={<div className="w-full h-full"></div>}>
          <ProductComponent />
          <Footer />
        </Suspense>
        {isModalOpen && (
          <div
            className="absolute bg-bgBlackShadow h-[300vw] w-full z-30"
            onClick={closeMenuModal}
          ></div>
        )}
        <Menu />
        {isCepConsultOpen && (
          <div
            className="absolute left-0 bg-bgBlackShadow w-full h-full z-30"
            onClick={closeCepMenu}
          ></div>
        )}
        {isCepConsultOpen && <CepConsult />};
      </div>
    </main>
  );
}

export default App;
