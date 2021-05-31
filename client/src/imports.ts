import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline, ThemeProvider, Container, Grid, Button, Paper, Typography } from '@material-ui/core';
import { Rating } from '@material-ui/lab';

import { App } from './components/App/App';
import { IShopItem } from './models/shopItem';
import { ShopList } from './components/ShopList/ShopList';
import { ShopItem } from './components/ShopItem/ShopItem';
import { ShopItemFull } from './components/ShopItemFull/ShopItemFull';
import { trimDescription } from './components/ShopItem/TrimDescription';
import getProductsList from './api/getProductsList';
import { getItemsData } from './mocks/getItemsData';
import { muiconfig } from './muiconfig';

export {
  React,
  useState,
  ReactDOM,
  CssBaseline,
  ThemeProvider,
  Container,
  Grid,
  Button,
  Paper,
  Typography,
  Rating,
  App,
  ShopList,
  ShopItem,
  ShopItemFull,
  trimDescription,
  getProductsList,
  getItemsData,
  muiconfig,
};
export type { IShopItem };
