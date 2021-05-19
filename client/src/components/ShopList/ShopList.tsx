import {
  React,
  ShopItem,
  getProductsList,
} from '../../imports';
import './ShopList.css';

const ShopList: React.FC = () => {
  const listItems = getProductsList();

  return (
    <div className="container">
      <ul className="shop-list">
        {
          listItems.map((item) => (
            <ShopItem {...item} />
          ))
        }
      </ul>
    </div>
  );
};

export default ShopList;
