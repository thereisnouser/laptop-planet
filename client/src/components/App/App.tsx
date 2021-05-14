import {
  React, BrowserRouter, Route,
  SearchPanel, getItemsData, ShopList, ShopItemFull, useState,
} from '../../imports';

const App: React.FC = () => {
  const [description, setDescription] = useState('');
  const itemsList = getItemsData(description || '');

  return (
    <BrowserRouter>
      <Route path="/" exact>
        <SearchPanel filterItemsList={(value: string) => setDescription(value)} />
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
