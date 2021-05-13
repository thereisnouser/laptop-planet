import {
  React, IShopItem, ShopItem,
} from '../../imports';
import './ShopList.css';

export const ShopList: React.FC<any> = (props: any) => {
  const { itemsList, showMoreInfoToggler } = props;

  return (
    <div className="container">
      <ul className="shop-list">
        {
          itemsList.map((item: IShopItem) => (
            <ShopItem
              {...item}
              showMoreInfoToggler={(id: number) => showMoreInfoToggler(id)}
            />
          ))
        }
      </ul>
    </div>
  );
};
