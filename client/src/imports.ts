import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import App from './components/App/App';
import ShopItemInt from './shopItemInt';
import ShopList from './components/ShopList/ShopList';
import ShopItem from './components/ShopItem/ShopItem';
import ShopItemFull from './components/ShopItemFull/ShopItemFull';
import ItemRating from './components/ItemRating/ItemRating';

import trimDescription from './components/ShopItem/TrimDescription';

import getItemsData from './GetItemsData';

// img{id} naming only for testing / before fetching images from server
import img1 from './components/App/images/e210ma-gj002t.png';
import img2 from './components/App/images/irbis-nb260.png';
import img3 from './components/App/images/ideapad-slim-1-11ast-05.png';

export {
  React, useState, ReactDOM,
  App, ShopList, ShopItem, ShopItemFull, ItemRating,
  trimDescription,
  getItemsData,
  img1, img2, img3,
};
export type { ShopItemInt };
