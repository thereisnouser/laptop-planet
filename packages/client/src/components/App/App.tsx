import {
  React,
  useState,
  useEffect,
  BrowserRouter,
  Route,
  getProductsList,
  Header,
  ShopList,
  ShopItemFull,
  IShopItem,
} from 'imports';
import './App.css';

export const App: React.FC = (): JSX.Element => {
  const [itemsList, setItemsList] = useState<IShopItem[]>([]);

  useEffect(() => {
    async function fetch() {
      const response = await getProductsList();
      setItemsList(response);
    }

    fetch();
  }, []);

  return (
    <BrowserRouter>
      <Route path="/" exact>
        <Header />
        <ShopList itemsList={itemsList} />
      </Route>
      <Route path="/product/:id">
        <ShopItemFull item={itemsList[0]} />
      </Route>
    </BrowserRouter>
    // remove hard coded '0' id when add method
    // for getting product by id from server
  );
};
