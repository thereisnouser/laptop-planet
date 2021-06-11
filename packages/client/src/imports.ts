import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, useHistory, useLocation, useParams } from 'react-router-dom';
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
  InputBase,
  IconButton,
} from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';
import { Rating, Pagination } from '@material-ui/lab';
import { DataGrid } from '@material-ui/data-grid';

import { App } from './components/App/App';
import { IShopItem } from './models/shopItem';
import { Header } from './components/Header/Header';
import { SearchPanel } from './components/SearchPanel/SearchPanel';
import { PageNumbers } from './components/PageNumbers/PageNumbers';
import { ShopList } from './components/ShopList/ShopList';
import { ShopItem } from './components/ShopItem/ShopItem';
import { ShopItemFull } from './components/ShopItemFull/ShopItemFull';
import { trimDescription } from './components/ShopItem/TrimDescription';
import { AdminPanel } from './components/AdminPanel/AdminPanel';
import { getProductsList } from './api/getProductsList';
import { getFilteredProductsList } from './api/getFilteredProductsList';
import { getProduct } from './api/getProduct';
import { getPagesQuantity } from './api/getPagesQuantity';
import { useQuery } from './hooks/useQuery';
import { muiconfig } from './muiconfig';
import { INITIAL_PAGE, MIN_PAGES_QUANTITY, MAX_ITEMS_ON_ADMIN_PAGE } from './constants';

export {
  React,
  useState,
  useEffect,
  ReactDOM,
  BrowserRouter,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams,
  CssBaseline,
  ThemeProvider,
  Container,
  Grid,
  Button,
  Paper,
  Typography,
  AppBar,
  Toolbar,
  InputBase,
  IconButton,
  SearchIcon,
  Rating,
  Pagination,
  DataGrid,
  App,
  Header,
  SearchPanel,
  PageNumbers,
  ShopList,
  ShopItem,
  ShopItemFull,
  trimDescription,
  AdminPanel,
  getProductsList,
  getFilteredProductsList,
  getProduct,
  getPagesQuantity,
  useQuery,
  muiconfig,
  INITIAL_PAGE,
  MIN_PAGES_QUANTITY,
  MAX_ITEMS_ON_ADMIN_PAGE,
};
export type { IShopItem };
