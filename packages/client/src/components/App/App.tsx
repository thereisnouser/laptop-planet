import { React, useState, GetProductsList, Header, ShopList, ShopItemFull, IShopItem } from 'imports';
import './App.css';

export const App: React.FC = (): React.ReactElement => {
  const itemsList = GetProductsList();
  const [activeItemId, setActiveItemId] = useState(0);

  if (activeItemId > 0) {
    const index = itemsList.findIndex((item: IShopItem) => item.id === activeItemId);

    return <ShopItemFull item={itemsList[index]} />;
  }

  return (
    <>
      <Header />
      <ShopList itemsList={itemsList} onSelect={setActiveItemId} />
    </>
  );
};
