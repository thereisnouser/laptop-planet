import {
  React, useState,
  getItemsData, ShopList, ShopItemFull,
} from '../../imports';
import './App.css';

export const App: React.FC = (): React.ReactElement => {
  const [itemsList] = useState(getItemsData());
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  if (activeItemIndex > 0) {
    return (
      <ShopItemFull
        {...itemsList[activeItemIndex - 1]}
      />
    );
  }

  return (
    <ShopList
      itemsList={itemsList}
      onSelect={setActiveItemIndex}
    />
  );
};
