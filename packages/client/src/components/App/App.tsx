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
  INITIAL_PAGE,
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

  useEffect(() => {
    async function fetch() {
      const response = await getFilteredProductsList(query.toString());

      setItemsList(response);
    }

    fetch();
  }, [query]);

  return (
    <>
      <Route path="/" exact>
        <Header />
        <SearchPanel onSearch={(value: string) => updateQuery(QueryKeys.Description, value)} />
        <ShopList itemsList={itemsList} />
        <PageNumbers currentPage={page} changePage={(value: string) => updateQuery(QueryKeys.Page, value)} />
      </Route>
      <Route path="/product/:id">
        <ShopItemFull />
      </Route>
    </>
  );
};
