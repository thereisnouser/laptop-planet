import {
  React, IShopItem, ShopItem,
} from '../../imports';
import './ShopList.css';

interface ShopListProps {
  itemsList: IShopItem[];
  showMoreInfoToggler: (id: number) => void;
}

export const ShopList: React.FC<ShopListProps> = (props): React.ReactElement => {
  const { itemsList, showMoreInfoToggler } = props;

  return (
    <div className="container">
      <ul className="shop-list">
        {
          itemsList.map((item: IShopItem) => (
            <ShopItem
              item={item}
              showMoreInfoToggler={(id: number) => showMoreInfoToggler(id)}
            />
          ))
        }
      </ul>
    </div>
  );
};
