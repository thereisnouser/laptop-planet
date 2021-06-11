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
  getPagesQuantity,
  INITIAL_PAGE,
  MIN_PAGES_QUANTITY,
} from 'imports';
import './App.css';

enum QueryKeys {
  Page = 'page',
  Description = 'description',
}

export const App: React.FC = () => {
  const [query, updateQuery] = useQuery();
  const [itemsList, setItemsList] = useState<IShopItem[]>([]);
  const page = Number(query.get(QueryKeys.Page)) || INITIAL_PAGE;
  const [pagesQuantity, setPagesQuantity] = useState(MIN_PAGES_QUANTITY);

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

  return (
    <>
      <Route path="/" exact>
        <Header />
        <SearchPanel onSearch={(value: string) => updateQuery(QueryKeys.Description, value)} />
        <ShopList itemsList={itemsList} />
        <PageNumbers
          pagesQuantity={pagesQuantity}
          currentPage={page}
          changePage={(value: string) => updateQuery(QueryKeys.Page, value)}
        />
      </Route>
      <Route path="/product/:id">
        <ShopItemFull />
      </Route>
    </>
  );
};
