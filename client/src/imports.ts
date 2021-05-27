import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter, Route, Link,
  useHistory, useLocation,
} from 'react-router-dom';

import {
  CssBaseline, ThemeProvider,
  Container, Grid, Button, Paper, Typography, InputBase, IconButton,
} from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';
import { Rating, Pagination } from '@material-ui/lab';
import { DataGrid } from '@material-ui/data-grid';

import App from './components/App/App';
import SearchPanel from './components/SearchPanel/SearchPanel';
import ShopList from './components/ShopList/ShopList';
import ShopItem from './components/ShopItem/ShopItem';
import ShopItemFull from './components/ShopItemFull/ShopItemFull';
import PageNumbers from './components/PageNumbers/PageNumbers';
import AdminPanel from './components/AdminPanel/AdminPanel';

import trimDescription from './components/ShopItem/TrimDescription';

import getProductsList from './api/getProductsList';
import getFilteredProductsList from './api/getFilteredProductsList';
import getPagesQuantity from './api/getPagesQuantity';
import muiconfig from './muiconfig';

import ShopItemInt from './shopItemInt';

export {
  React, useState, useEffect, ReactDOM,
  BrowserRouter, Route, Link, useHistory, useLocation,
  CssBaseline, ThemeProvider,
  Container, Grid, Button, Paper, Typography, InputBase, IconButton, SearchIcon, Rating, Pagination,
  SearchPanel, App, ShopList, ShopItem, ShopItemFull, PageNumbers, AdminPanel,
  trimDescription,
  getProductsList, getFilteredProductsList, getPagesQuantity, muiconfig,
  DataGrid,
};
export type { ShopItemInt };
