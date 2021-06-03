import { React, useState, useEffect, getProductsList, Header, ShopList, ShopItemFull, IShopItem } from 'imports';
import './App.css';

export const App: React.FC = (): JSX.Element => {
  const [itemsList, setItemsList] = useState<IShopItem[]>([]);
  const [activeItemId, setActiveItemId] = useState(0);

  useEffect(() => {
    async function fetch() {
      const response = await getProductsList();
      setItemsList(response);
    }

    fetch();
  }, []);

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
