import {
  React, ShopItemInt, ShopItem,
} from '../../imports';
import './ShopList.css';

const ShopList: React.FC<any> = (props: any) => {
  const { itemsList, showMoreInfoToggler } = props;

  return (
    <div className="container">
      <ul className="shop-list">
        {
          itemsList.map((item: ShopItemInt) => (
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

export default ShopList;
