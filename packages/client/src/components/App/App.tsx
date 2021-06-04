import {
  React,
  useState,
  useEffect,
  Route,
  useLocation,
  useHistory,
  Header,
  SearchPanel,
  PageNumbers,
  ShopList,
  ShopItemFull,
  IShopItem,
  getFilteredProductsList,
  getPagesQuantity,
} from 'imports';
import './App.css';

export const App: React.FC = (): JSX.Element => {
  const history = useHistory();
  const location = useLocation();
  const [query, setQuery] = useState<URLSearchParams>(new URLSearchParams(location.search));
  const [itemsList, setItemsList] = useState<IShopItem[]>([]);
  const currentPage = query.get('page') || 1;
  const [pagesQuantity, setPagesQuantity] = useState(1);

  useEffect(() => {
    const newQuery = new URLSearchParams(location.search);

    setQuery(newQuery);
  }, [location]);

  useEffect(() => {
    async function fetch() {
      const response = await getFilteredProductsList(query.toString());

      setItemsList(response);
    }

    fetch();
  }, [query]);

  useEffect(() => {
    async function fetch() {
      const response = await getPagesQuantity();
      setPagesQuantity(response);
    }

    fetch();
  }, [itemsList]);

  const setParamInQuery = (property: string, value: string) => {
    const newQuery = new URLSearchParams(location.search);

    if (newQuery.has(property) && value === '') {
      newQuery.delete(property);
    } else if (newQuery.has(property)) {
      newQuery.set(property, value);
    } else {
      newQuery.append(property, value);
    }

    history.push({
      search: newQuery.toString(),
    });
  };

  return (
    <>
      <Route path="/" exact>
        <Header />
        <SearchPanel onSearch={setParamInQuery} />
        <ShopList itemsList={itemsList} />
        <PageNumbers pagesQuantity={pagesQuantity} currentPage={Number(currentPage)} changePage={setParamInQuery} />
      </Route>
      <Route path="/product/:id">
        <ShopItemFull />
      </Route>
    </>
  );
};
