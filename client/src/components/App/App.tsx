import {
  React, useState, Route, useLocation, useHistory,
  SearchPanel, ShopList, ShopItemFull, PageNumbers, getItemsData, getPagesQuantity,
  SortingList,
} from '../../imports';

const App: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const [query, setQuery] = useState(new URLSearchParams(location.search));

  const currentPage = query.get('page') || 1;
  const currentSortType = query.get('orderBy') || '';
  const pagesQuantity = getPagesQuantity();

  const itemsList = getItemsData(query.toString());

  const setParamInQuery = (property: string, value: string) => {
    const newQuery = new URLSearchParams(location.search);

    if (property === 'description' || property === 'orderBy') {
      newQuery.set('page', '1');
    }

    if (newQuery.has(property) && value === '') {
      newQuery.delete(property);
    } else if (newQuery.has(property)) {
      newQuery.set(property, value);
    } else if (value !== '') {
      newQuery.append(property, value);
    }

    setQuery(newQuery);

    history.push({
      search: newQuery.toString(),
    });
  };

  return (
    <>
      <Route path="/" exact>
        <SearchPanel onSearch={setParamInQuery} />
        <SortingList
          currentSortType={currentSortType}
          onChangeSortType={setParamInQuery}
        />
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
    </>
  );
  // remove hard coded '0' id when add method
  // for getting product by id from server
};

export default App;
