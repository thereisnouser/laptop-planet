import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter, Route, Link,
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

export {
  React, useState, ReactDOM,
  BrowserRouter, Route, Link,
  CssBaseline, ThemeProvider,
  Container, Grid, Button, Paper, Typography, Rating,
  App, ShopList, ShopItem, ShopItemFull,
  trimDescription,
  getItemsData, muiconfig,
};
export type { ShopItemInt };
