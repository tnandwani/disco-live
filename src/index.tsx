import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CssVarsProvider
      defaultMode="dark"
    >
      <App />
    </CssVarsProvider>
  </React.StrictMode>
);

