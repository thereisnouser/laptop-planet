import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import App from './components/App/App';
import ShopItemInt from './shopItemInt';
import ShopList from './components/ShopList/ShopList';
import ShopItem from './components/ShopItem/ShopItem';
import ItemRating from './components/ItemRating/ItemRating';

import trimDescription from './components/ShopItem/TrimDescription';

import getItemsData from './GetItemsData';

import img1 from './components/App/images/E210MA-GJ002T.png';
import img2 from './components/App/images/Irbis-NB260.png';
import img3 from './components/App/images/IdeaPad-Slim-1-11AST-05.png';

export {
  React, useState, ReactDOM,
  App, ShopList, ShopItem, ItemRating,
  trimDescription,
  getItemsData,
  img1, img2, img3,
};
export type { ShopItemInt };
