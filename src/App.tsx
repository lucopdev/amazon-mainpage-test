import React, { useContext } from 'react';

import NavigationBar from './components/NavigationBar/NavigationBar';
import IMenuContextProps from './interfaces/IMenuContextProps';
import Header from './components/Header/Header';
import MenuContext from './context/MenuContext';

import './App.css';
import Footer from './components/Footer/Footer';
import ProductGrid from './components/ProductGrid/ProductGrid';

function App() {
  const { menuModal, isModalOpen } = useContext<IMenuContextProps>(
    MenuContext as React.Context<IMenuContextProps>
  );

  return (
    <main className={`${isModalOpen && 'lock-screen'} flex flex-col items-center min-w-[1200px]`}>
      {isModalOpen && menuModal}
      <Header />
      <NavigationBar />
      <ProductGrid />
      <Footer />
    </main>
  );
}

export default App;
