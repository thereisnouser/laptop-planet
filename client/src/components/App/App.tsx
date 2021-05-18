import {
  React, useState, useEffect, Route, useLocation, useHistory,
  SearchPanel, getItemsData, ShopList, ShopItemFull, IFilterProps, createFilterQuery,
} from '../../imports';

const App: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const [description, setDescription] = useState('');
  let filterParams: IFilterProps = {
    description,
  };

  useEffect(() => {
    if (params.has('description')) {
      const value = params.get('description');
      setDescription(value as string);
    } else {
      setDescription('');
    }

    return (() => {
      filterParams = { ...filterParams, description };
    });
  }, [location]);

  const itemsList = getItemsData(filterParams);

  const filterItemsList = (val: string) => {
    filterParams = { ...filterParams, description: val };
    const query: string = createFilterQuery(filterParams);

    history.push({
      search: query.substr(1),
    });
  };

  return (
    <>
      <Route path="/" exact>
        <SearchPanel onSearch={filterItemsList} />
        <ShopList itemsList={itemsList} />
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
