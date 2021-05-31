import { React, useState, getProductsList, ShopList, ShopItemFull, IShopItem } from 'imports';

export const App: React.FC = (): React.ReactElement => {
  const [itemsList] = useState(getProductsList());
  const [activeItemId, setActiveItemId] = useState(0);

  if (activeItemId > 0) {
    const index = itemsList.findIndex((item: IShopItem) => item.id === activeItemId);

    return <ShopItemFull item={itemsList[index]} />;
  }

  return <ShopList itemsList={itemsList} onSelect={setActiveItemId} />;
};
