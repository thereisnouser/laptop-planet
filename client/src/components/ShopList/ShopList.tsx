import {
  React, IShopItem, ShopItem,
} from '../../imports';
import './ShopList.css';

interface ShopListProps {
  itemsList: IShopItem[];
  setActiveItemId: (id: number) => void;
}

export const ShopList: React.FC<ShopListProps> = ({
  itemsList, setActiveItemId,
}): React.ReactElement => (
  <div className="container">
    <ul className="shop-list">
      {
        itemsList.map((item: IShopItem) => (
          <ShopItem
            item={item}
            setActiveItemId={(id: number) => setActiveItemId(id)}
          />
        ))
      }
    </ul>
  </div>
);
