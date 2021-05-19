import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import {
  CssBaseline, ThemeProvider,
  Container, Grid, Button, Paper, Typography,
} from '@material-ui/core';
import { Rating } from '@material-ui/lab';

import { App } from './components/App/App';
import { IShopItem } from './models/shopItem';
import { ShopList } from './components/ShopList/ShopList';
import { ShopItem } from './components/ShopItem/ShopItem';
import { ShopItemFull } from './components/ShopItemFull/ShopItemFull';

import { trimDescription } from './components/ShopItem/TrimDescription';

import { getItemsData } from './mocks/getItemsData';
import { muiconfig } from './muiconfig';

// img{id} naming only for testing / before fetching images from server
import img1 from './components/App/images/e210ma-gj002t.png';
import img2 from './components/App/images/irbis-nb260.png';
import img3 from './components/App/images/ideapad-slim-1-11ast-05.png';

export {
  React, useState, ReactDOM,
  CssBaseline, ThemeProvider,
  Container, Grid, Button, Paper, Typography, Rating,
  App, ShopList, ShopItem, ShopItemFull,
  trimDescription,
  getItemsData, muiconfig,
  img1, img2, img3,
};
export type { IShopItem };
