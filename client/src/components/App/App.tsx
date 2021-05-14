import {
  React, useState,
  getItemsData, ShopList, ShopItemFull,
} from '../../imports';
import './App.css';

export const App: React.FC = (): React.ReactElement => {
  const [itemsList] = useState(getItemsData());
  const [activeItemId, setActiveItemId] = useState(0);

  if (activeItemId > 0) {
    const index = itemsList.findIndex((item) => item.id === activeItemId);

    return (
      <ShopItemFull
        item={itemsList[index]}
      />
    );
  }

  return (
    <ShopList
      itemsList={itemsList}
      onSelect={setActiveItemId}
    />
  );
};
