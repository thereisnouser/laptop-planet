import {
  React, IShopItem, ShopItem,
} from '../../imports';
import './ShopList.css';

interface ShopListProps {
  itemsList: IShopItem[];
  onSelect: (id: number) => void;
}

export const ShopList: React.FC<ShopListProps> = ({
  itemsList, onSelect,
}): React.ReactElement => (
  <div className="container">
    <ul className="shop-list">
      {
        itemsList.map((item: IShopItem) => (
          <ShopItem
            item={item}
            onSelect={onSelect}
          />
        ))
      }
    </ul>
  </div>
);
