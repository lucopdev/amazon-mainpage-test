import React, { Suspense, lazy, useContext, useEffect } from 'react';

import NavigationBar from './components/NavigationBar/NavigationBar';
import IMenuContextProps from './interfaces/IMenuContextProps';
import Header from './components/Header/Header';
import MenuContext from './context/MenuContext';

import Menu from './components/Menu/Menu';

const ProductComponent = lazy(() => import('./components/ProductComponent/ProductComponent'));
const Footer = lazy(() => import('./components/Footer/Footer'));

function App() {
  const { isModalOpen } = useContext<IMenuContextProps>(
    MenuContext as React.Context<IMenuContextProps>
  );

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isModalOpen]);

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
            className={`${'absolute bg-bgBlackShadow h-[300vw] w-full overflow-hidden z-50'}`}
          ></div>
        )}
        <Menu />
      </div>
    </main>
  );
}

export default App;
