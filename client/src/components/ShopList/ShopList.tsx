import {
  React, IShopItem, ShopItem,
} from '../../imports';
import './ShopList.css';

interface ShopListProps {
  itemsList: IShopItem[];
  // eslint-disable-next-line no-unused-vars
  setActiveItemId: (id: number) => void;
}

export const ShopList: React.FC<ShopListProps> = (props): React.ReactElement => {
  const { itemsList, setActiveItemId } = props;

  return (
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
};
