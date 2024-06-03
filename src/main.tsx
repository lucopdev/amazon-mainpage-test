import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import MenuProvider from './services/MenuProvider.tsx';
import ApiProvider from './services/ApiProvider.tsx';
import CepConsultProvider from './services/CepProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CepConsultProvider>
      <ApiProvider>
        <MenuProvider>
          <App />
        </MenuProvider>
      </ApiProvider>
    </CepConsultProvider>
  </React.StrictMode>
);
