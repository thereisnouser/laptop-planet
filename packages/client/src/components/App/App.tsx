import {
  React,
  useState,
  useEffect,
  Route,
  Header,
  SearchPanel,
  PageNumbers,
  ShopList,
  ShopItemFull,
  IShopItem,
  getFilteredProductsList,
  useQuery,
} from 'imports';
import './App.css';

export const App: React.FC = (): JSX.Element => {
  const [query, updateQuery] = useQuery();
  const [itemsList, setItemsList] = useState<IShopItem[]>([]);
  const page = query.get('page') || 1;

  useEffect(() => {
    async function fetch() {
      const response = await getFilteredProductsList(query.toString());

      setItemsList(response);
    }

    fetch();
  }, [query]);

  const setParamInQuery = (property: string, value: string) => {
    updateQuery(property, value);
  };

  return (
    <>
      <Route path="/" exact>
        <Header />
        <SearchPanel onSearch={setParamInQuery} />
        <ShopList itemsList={itemsList} />
        <PageNumbers currentPage={Number(page)} changePage={setParamInQuery} />
      </Route>
      <Route path="/product/:id">
        <ShopItemFull />
      </Route>
    </>
  );
};
