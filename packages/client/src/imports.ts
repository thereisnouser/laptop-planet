import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  CssBaseline,
  ThemeProvider,
  Container,
  Grid,
  Button,
  Paper,
  Typography,
  AppBar,
  Toolbar,
} from '@material-ui/core';
import { Rating } from '@material-ui/lab';

import { App } from './components/App/App';
import { IShopItem } from './models/shopItem';
import { Header } from './components/Header/Header';
import { ShopList } from './components/ShopList/ShopList';
import { ShopItem } from './components/ShopItem/ShopItem';
import { ShopItemFull } from './components/ShopItemFull/ShopItemFull';
import { trimDescription } from './components/ShopItem/TrimDescription';
import { getProductsList } from './api/getProductsList';
import { muiconfig } from './muiconfig';

export {
  React,
  useState,
  useEffect,
  ReactDOM,
  CssBaseline,
  ThemeProvider,
  Container,
  Grid,
  Button,
  Paper,
  Typography,
  AppBar,
  Toolbar,
  Rating,
  App,
  Header,
  ShopList,
  ShopItem,
  ShopItemFull,
  trimDescription,
  getProductsList,
  muiconfig,
};
export type { IShopItem };
