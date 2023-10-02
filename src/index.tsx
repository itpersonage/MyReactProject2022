import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style/main.scss';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ScrollToTop from './components/common/ScrollToTop';

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
