import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "./assets/css/global.css";
import RouterConfig from './router/RouterConfig';

// react application
//virtual dom

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterConfig />
  </StrictMode>,
);
