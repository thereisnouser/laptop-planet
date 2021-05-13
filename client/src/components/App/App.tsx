import {
  React, useState,
  getItemsData, ShopList, ShopItemFull,
} from '../../imports';
import ShopItemInt from '../../shopItemInt';
import './App.css';

// need to replace w/ routing
function getItemIndex(itemsList: ShopItemInt[]) {
  for (let i = 0; i < itemsList.length; i++) {
    if (itemsList[i].active) {
      return i;
    }
  }

  return -1;
}

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

  const idxActiveItem = getItemIndex(itemsList);
  if (idxActiveItem >= 0) {
    return (
      <ShopItemFull
        {...itemsList[idxActiveItem]}
        showMoreInfoToggler={showMoreInfoToggler}
      />
    );
  }

  return (
    <ShopList
      itemsList={itemsList}
      showMoreInfoToggler={showMoreInfoToggler}
    />
  );
};

export default App;
