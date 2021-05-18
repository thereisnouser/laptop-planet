import {
  React, useState, Route, useLocation, useHistory,
  SearchPanel, ShopList, ShopItemFull, PageNumbers, getItemsData,
} from '../../imports';

const App: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const [query, setQuery] = useState(new URLSearchParams(location.search).toString());
  const itemsList = getItemsData(query);

  const setParamInQuery = (property: string, value: string) => {
    const newQuery = new URLSearchParams(location.search);

    if (newQuery.has(property) && value === '') {
      newQuery.delete(property);
    } else if (newQuery.has(property)) {
      newQuery.set(property, value);
    } else {
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
        <PageNumbers changePage={setParamInQuery} />
      </Route>
      <Route path="/product/:id">
        <ShopItemFull {...itemsList[0]} />
      </Route>
    </>
  );
  // remove hard coded '0' id when add method
  // for getting product by id from server
};

export default App;
