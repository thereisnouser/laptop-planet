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
import { Rating } from '@material-ui/lab';

import { App } from './components/App/App';
import { IShopItem } from './models/shopItem';
import { Header } from './components/Header/Header';
import { SearchPanel } from './components/SearchPanel/SearchPanel';
import { ShopList } from './components/ShopList/ShopList';
import { ShopItem } from './components/ShopItem/ShopItem';
import { ShopItemFull } from './components/ShopItemFull/ShopItemFull';
import { trimDescription } from './components/ShopItem/TrimDescription';
import { getProductsList } from './api/getProductsList';
import { getFilteredProductsList } from './api/getFilteredProductsList';
import { getProduct } from './api/getProduct';
import { useQuery } from './hooks/useQuery';
import { muiconfig } from './muiconfig';

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
  App,
  Header,
  SearchPanel,
  ShopList,
  ShopItem,
  ShopItemFull,
  trimDescription,
  getProductsList,
  getFilteredProductsList,
  getProduct,
  useQuery,
  muiconfig,
};
export type { IShopItem };
