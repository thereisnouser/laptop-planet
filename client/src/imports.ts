import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App/App';
import ShopItemInt from './shopItemInt';
import ShopList from './components/ShopList/ShopList';
import ShopItem from './components/ShopItem/ShopItem';
import ItemRating from './components/ItemRating/ItemRating';

import trimDescription from './components/ShopItem/TrimDescription';

import getItemsData from './GetItemsData';

import img1 from './components/ShopList/images/E210MA-GJ002T.png';

export {
  React, ReactDOM,
  App, ShopList, ShopItem, ItemRating,
  trimDescription,
  getItemsData,
  img1,
};
export type { ShopItemInt };
