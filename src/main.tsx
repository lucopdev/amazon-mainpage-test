import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import MenuProvider from './services/MenuProvider.tsx';
import ApiProvider from './services/ApiProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApiProvider>
      <MenuProvider>
        <App />
      </MenuProvider>
    </ApiProvider>
  </React.StrictMode>
);
