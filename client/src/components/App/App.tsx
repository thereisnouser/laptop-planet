import {
  React, useState, useEffect, Route, useLocation, useHistory,
  SearchPanel, getItemsData, ShopList, ShopItemFull,
} from '../../imports';

const App: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const [description, setDescription] = useState('');
  let itemsList = getItemsData('');

  useEffect(() => {
    if (params.get('description') !== null) {
      const value = params.get('description');
      setDescription(value as string);
    } else {
      setDescription('');
    }
  }, [location]);

  itemsList = getItemsData(description || '');

  const filterItemsList = (value: string) => {
    if (value !== '') {
      history.push({
        search: `?description=${value}`,
      });
    } else {
      history.push({
        search: '',
      });
    }
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
