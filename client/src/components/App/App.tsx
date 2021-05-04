import {
  React, useState,
  getItemsData, ShopList,
} from '../../imports';
import './App.css';

const App: React.FC = () => {
  const [itemsList] = useState(getItemsData());

  return (
    <ShopList
      itemsList={itemsList}
    />
  );
};

export default App;
