import {
  React, BrowserRouter, Route,
  SearchPanel, getItemsData, ShopList, ShopItemFull,
} from '../../imports';

const App: React.FC = () => {
  const itemsList = getItemsData();

  return (
    <BrowserRouter>
      <Route path="/" exact>
        <SearchPanel />
        <ShopList itemsList={itemsList} />
      </Route>
      <Route path="/product/:id">
        <ShopItemFull {...itemsList[0]} />
      </Route>
    </BrowserRouter>
  );
  // remove hard coded '0' id when add method
  // for getting product by id from server
};

export default App;
