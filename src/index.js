import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import MainPage from './shop-page/components/app/app';
import BuyCartPage from './buy-cart-page/components/app/app';

ReactDOM.render(
  <React.StrictMode>
    <MainPage></MainPage>
    <BuyCartPage></BuyCartPage>
  </React.StrictMode>,
  document.getElementById('root')
);

