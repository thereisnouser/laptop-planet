import {
  React, ShopItemInt, ShopItem,
} from '../../imports';
import './ShopList.css';

const ShopList: React.FC<any> = (props: any) => {
  const { itemsList } = props;

  return (
    <div className="container">
      <ul className="shop-list">
        {
          itemsList.map((item: ShopItemInt) => (
            <ShopItem {...item} />
          ))
        }
      </ul>
    </div>
  );
};

export default ShopList;
