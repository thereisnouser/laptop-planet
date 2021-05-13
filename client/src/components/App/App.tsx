import {
  React, useState,
  getItemsData, ShopList, ShopItemFull, IShopItem,
} from '../../imports';
import './App.css';

// need to replace w/ routing
function getItemIndex(itemsList: IShopItem[]): number {
  for (let i = 0; i < itemsList.length; i++) {
    if (itemsList[i].active) {
      return i;
    }
  }

  return -1;
}

export const App: React.FC = (): React.ReactElement => {
  const [itemsList, setItemsList] = useState(getItemsData());

  const showMoreInfoToggler = (id: number): void => {
    setItemsList(() => [
      ...itemsList.slice(0, id - 1),
      {
        ...itemsList[id - 1],
        active: !itemsList[id - 1].active,
      },
      ...itemsList.slice(id),
    ]);
  };

  const idxActiveItem: number = getItemIndex(itemsList);
  if (idxActiveItem >= 0) {
    return (
      <ShopItemFull
        {...itemsList[idxActiveItem]}
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
