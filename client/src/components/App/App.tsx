import {
  React, useState,
  getItemsData, ShopList, ShopItemFull,
} from '../../imports';
import './App.css';

export const App: React.FC = (): React.ReactElement => {
  const [itemsList] = useState(getItemsData());
  const [activeItemId, setActiveItemId] = useState(0);

  if (activeItemId > 0) {
    return (
      <ShopItemFull
        {...itemsList[activeItemId - 1]}
      />
    );
  }

  return (
    <ShopList
      itemsList={itemsList}
      setActiveItemId={setActiveItemId}
    />
  );
};
