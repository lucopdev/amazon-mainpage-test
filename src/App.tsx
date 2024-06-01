import React, { Suspense, lazy, useContext } from 'react';

import NavigationBar from './components/NavigationBar/NavigationBar';
import IMenuContextProps from './interfaces/IMenuContextProps';
import Header from './components/Header/Header';
import MenuContext from './context/MenuContext';

import './App.css';

const ProductComponent = lazy(() => import('./components/ProductComponent/ProductComponent'));
const Footer = lazy(() => import('./components/Footer/Footer'));

function App() {
  const { menuModal, isModalOpen } = useContext<IMenuContextProps>(
    MenuContext as React.Context<IMenuContextProps>
  );

  return (
    <main className={`${isModalOpen && 'lock-screen'}`}>
      {isModalOpen && menuModal}
      <div className="flex flex-col items-center min-w-[1200px]">
        <Header />
        <NavigationBar />
        <Suspense fallback={<div className="w-full h-full"></div>}>
          <ProductComponent />
          <Footer />
        </Suspense>
      </div>
    </main>
  );
}

export default App;
