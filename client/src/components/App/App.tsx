import {
  React, useState,
  getItemsData, ShopList, ShopItemFull,
} from '../../imports';

// need to replace w/ routing
function isItemActive(itemsList: any) {
  for (let i = 0; i < itemsList.length; i++) {
    if (itemsList[i].active === true) {
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

  const idxActiveItem = isItemActive(itemsList);
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
