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
  const page = Number(query.get('page')) || INITIAL_PAGE;

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
        <SearchPanel onSearch={(value: string) => setParamInQuery(QueryKeys.Description, value)} />
        <ShopList itemsList={itemsList} />
        <PageNumbers
          currentPage={Number(page)}
          changePage={(value: string) => setParamInQuery(QueryKeys.Page, value)}
        />
      </Route>
      <Route path="/product/:id">
        <ShopItemFull />
      </Route>
    </>
  );
};
