import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter, Switch, Route, Link,
} from 'react-router-dom';

import {
  CssBaseline, ThemeProvider,
  Container, Grid, Button, Paper, Typography,
} from '@material-ui/core';
import { Rating } from '@material-ui/lab';

import App from './components/App/App';
import ShopItemInt from './shopItemInt';
import ShopList from './components/ShopList/ShopList';
import ShopItem from './components/ShopItem/ShopItem';
import ShopItemFull from './components/ShopItemFull/ShopItemFull';

import trimDescription from './components/ShopItem/TrimDescription';

import getItemsData from './GetItemsData';
import muiconfig from './muiconfig';

import img1 from './components/App/images/e210ma-gj002t.png';
import img2 from './components/App/images/irbis-nb260.png';
import img3 from './components/App/images/ideapad-slim-1-11ast-05.png';

export {
  React, useState, ReactDOM,
  BrowserRouter, Switch, Route, Link,
  CssBaseline, ThemeProvider,
  Container, Grid, Button, Paper, Typography, Rating,
  App, ShopList, ShopItem, ShopItemFull,
  trimDescription,
  getItemsData, muiconfig,
  img1, img2, img3,
};
export type { ShopItemInt };
