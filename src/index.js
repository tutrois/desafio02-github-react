import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/Home';

import GlobalStyleComponent from './stylesGlobal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyleComponent/>
    <App />
  </React.StrictMode>
);