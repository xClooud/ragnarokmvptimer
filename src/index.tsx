import React from 'react';
import ReactDOM from 'react-dom/client';
import dayjs from 'dayjs';

import { HashRouter } from 'react-router-dom';

import App from './App';
import './styles/Global';

import { SettingsProvider } from './contexts/SettingsContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <HashRouter>
      <SettingsProvider>
        <App />
      </SettingsProvider>
    </HashRouter>
  </React.StrictMode>
);
