import {
  React, useState, BrowserRouter, Route,
  getItemsData, ShopList, ShopItemFull,
} from '../../imports';

const App: React.FC = () => {
  const [itemsList] = useState(getItemsData());

  return (
    <BrowserRouter>
      <Route path="/" exact>
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
