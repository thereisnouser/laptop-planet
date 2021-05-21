import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter, Route, Link,
  useHistory, useLocation,
} from 'react-router-dom';

import {
  CssBaseline, ThemeProvider,
  Container, Grid, Button, Paper, Typography, InputBase, IconButton,
  InputLabel, MenuItem, FormControl, Select,
} from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';
import { Rating, Pagination } from '@material-ui/lab';

import App from './components/App/App';
import SearchPanel from './components/SearchPanel/SearchPanel';
import ShopList from './components/ShopList/ShopList';
import ShopItem from './components/ShopItem/ShopItem';
import ShopItemFull from './components/ShopItemFull/ShopItemFull';
import SortingList from './components/SortingList/SortingList';
import PageNumbers from './components/PageNumbers/PageNumbers';

import trimDescription from './components/ShopItem/TrimDescription';

import getItemsData from './GetItemsData';
import getPagesQuantity from './api/getPagesQuantity';
import muiconfig from './muiconfig';

import ShopItemInt from './shopItemInt';

export {
  React, useState, useEffect, ReactDOM,
  BrowserRouter, Route, Link, useHistory, useLocation,
  CssBaseline, ThemeProvider,
  Container, Grid, Button, Paper, Typography, InputBase, IconButton, SearchIcon, Rating, Pagination,
  InputLabel, MenuItem, FormControl, Select,
  SearchPanel, App, ShopList, ShopItem, ShopItemFull, SortingList, PageNumbers,
  trimDescription,
  getItemsData, getPagesQuantity, muiconfig,
};
export type { ShopItemInt };
