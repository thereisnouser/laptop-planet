import {
  React, ShopItemInt,
} from '../../imports';
import './shopItem.css';

const ShopListItem: React.FC<ShopItemInt> = (props: ShopItemInt) => {
  const {
    id, image, title, price, description, rating,
  } = props;

  const stars: Array<any> = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<span className="shop-item__star-gold" />);
    } else {
      stars.push(<span className="shop-item__star-empty" />);
    }
  }

  return (
    <li>
      <div className="shop-item">
        <div className="shop-item__img">
          <img src={image} alt="img-1" />
        </div>
        <div className="shop-item__info">
          <div className="shop-item__header">
            <div className="shop-item__title">
              {title}
              {id}
            </div>
            <div className="shop-item__price">
              $
              {price}
            </div>
          </div>
          <div className="shop-item__description">{description}</div>
          <div className="shop-item__footer">
            <div className="shop-item__rating">
              {stars}
            </div>
            <button className="shop-item__button" type="button">Add to cart</button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ShopListItem;
