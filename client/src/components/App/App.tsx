import {
  React, useState, BrowserRouter, Route,
  getItemsData, ShopList,
} from '../../imports';

const App: React.FC = () => {
  const [itemsList] = useState(getItemsData());

  return (
    <BrowserRouter>
      <Route path="/">
        <ShopList itemsList={itemsList} />
      </Route>
    </BrowserRouter>
  );
};

export default App;
