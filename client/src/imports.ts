import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App/App';
import ShopItemInt from './shopItemInt';
import ShopList from './components/ShopList/ShopList';
import ShopItem from './components/ShopItem/ShopItem';
import ItemRating from './components/ItemRating/ItemRating';

import getProductsList from './api/getProductsList';

export {
  React, ReactDOM,
  App, ShopList, ShopItem, ItemRating,
  getProductsList,
};
export type { ShopItemInt };
