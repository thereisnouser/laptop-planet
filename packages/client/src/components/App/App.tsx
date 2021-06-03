import {
  React,
  useState,
  useEffect,
  BrowserRouter,
  Route,
  getProductsList,
  Header,
  SearchPanel,
  ShopList,
  ShopItemFull,
  IShopItem,
} from 'imports';
import './App.css';

export const App: React.FC = (): JSX.Element => {
  const [description, setDescription] = useState('');
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
        <SearchPanel filterItemsList={(value: string) => setDescription(value)} />
        <ShopList itemsList={itemsList} />
      </Route>
      <Route path="/product/:id">
        <ShopItemFull />
      </Route>
    </BrowserRouter>
  );
};
