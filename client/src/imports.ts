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
import { Rating } from '@material-ui/lab';

import App from './components/App/App';
import SearchPanel from './components/SearchPanel/SearchPanel';
import ShopList from './components/ShopList/ShopList';
import ShopItem from './components/ShopItem/ShopItem';
import ShopItemFull from './components/ShopItemFull/ShopItemFull';

import trimDescription from './components/ShopItem/TrimDescription';

import getItemsData from './GetItemsData';
import muiconfig from './muiconfig';

import ShopItemInt from './shopItemInt';
import { IFilterProps } from './models/filterProps';

export {
  React, useState, useEffect, ReactDOM,
  BrowserRouter, Route, Link, useHistory, useLocation,
  CssBaseline, ThemeProvider,
  Container, Grid, Button, Paper, Typography, InputBase, IconButton, SearchIcon, Rating,
  SearchPanel, App, ShopList, ShopItem, ShopItemFull,
  trimDescription,
  getItemsData, muiconfig,
};
export type { ShopItemInt, IFilterProps };
