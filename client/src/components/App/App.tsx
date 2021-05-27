import {
  React, useState, Route, useLocation, useHistory,
  SearchPanel, ShopList, ShopItemFull, PageNumbers, AdminPanel,
  getFilteredProductsList, getPagesQuantity,
} from '../../imports';

const App: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const [query, setQuery] = useState(new URLSearchParams(location.search).toString());
  const currentPage = new URLSearchParams(location.search).get('page') || 1;
  const pagesQuantity = getPagesQuantity();
  const itemsList = getFilteredProductsList(query);

  const setParamInQuery = (property: string, value: string) => {
    const newQuery = new URLSearchParams(location.search);

    if (property === 'description') {
      newQuery.set('page', '1');
    }

    if (newQuery.has(property) && value === '') {
      newQuery.delete(property);
    } else if (newQuery.has(property)) {
      newQuery.set(property, value);
    } else if (value !== '') {
      newQuery.append(property, value);
    }

    setQuery(newQuery.toString());

    history.push({
      search: newQuery.toString(),
    });
  };

  return (
    <>
      <Route path="/" exact>
        <SearchPanel onSearch={setParamInQuery} />
        <ShopList itemsList={itemsList} />
        <PageNumbers
          pagesQuantity={pagesQuantity}
          currentPage={+currentPage}
          changePage={setParamInQuery}
        />
      </Route>
      <Route path="/product/:id">
        <ShopItemFull {...itemsList[0]} />
      </Route>
      <Route path="/admin">
        <AdminPanel itemsList={itemsList} />
      </Route>
    </>
  );
  // remove hard coded '0' id when add method
  // for getting product by id from server
};

export default App;
