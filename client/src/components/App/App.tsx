import {
  React, useState,
  getItemsData, ShopList,
} from '../../imports';
import './App.css';

const App: React.FC = () => {
  const [itemsList, setItemsList] = useState(getItemsData());

  const showMoreInfoToggler = (id: number) => {
    setItemsList(() => [
      ...itemsList.slice(0, id - 1),
      {
        ...itemsList[id - 1],
        active: !itemsList[id - 1].active,
      },
      ...itemsList.slice(id),
    ]);
  };

  return (
    <ShopList
      itemsList={itemsList}
    />
  );
};

export default App;
