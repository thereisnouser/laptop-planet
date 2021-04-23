import {
  React, ShopListItemInt,
} from '../../imports';
import './shopListItem.css';

const ShopListItem: React.FC<ShopListItemInt> = (props: ShopListItemInt) => {
  const {
    id, image, title, price, description, rating,
  } = props;

  const stars: Array<any> = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<span className="shop-list-item__star-gold" />);
    } else {
      stars.push(<span className="shop-list-item__star-empty" />);
    }
  }

  return (
    <li>
      <div className="shop-list-item">
        <div className="shop-list-item__img">
          <img src={image} alt="img-1" />
        </div>
        <div className="shop-list-item__info">
          <div className="shop-list-item__header">
            <div className="shop-list-item__title">
              {title}
              {id}
            </div>
            <div className="shop-list-item__price">
              $
              {price}
            </div>
          </div>
          <div className="shop-list-item__description">{description}</div>
          <div className="shop-list-item__footer">
            <div className="shop-list-item__rating">
              {stars}
            </div>
            <button className="shop-list-item__button" type="button">Add to cart</button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ShopListItem;
