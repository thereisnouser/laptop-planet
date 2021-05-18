import {
  React, useState, useEffect, Route, useLocation, useHistory,
  SearchPanel, getItemsData, ShopList, ShopItemFull, IFilterProps,
} from '../../imports';

const App: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const filterParams: IFilterProps = {};
  const [description, setDescription] = useState('');
  let itemsList = getItemsData(description);

  useEffect(() => {
    if (params.has('description')) {
      const value = params.get('description');
      setDescription(value as string);
    } else {
      setDescription('');
    }
  }, [location]);

  itemsList = getItemsData(description);

  const filterItemsList = (dscp: string) => {
    let query: string = '';
    filterParams.description = dscp;

    for (const [key, value] of Object.entries(filterParams)) {
      if ((key === 'description' && value === '')
       || (key === 'page' && value <= 1)) {
        continue;
      }

      query += `&${key}=${value}`;
    }

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
