import {
  React, ShopItemInt, ItemRating, trimDescription,
} from '../../imports';
import './ShopItem.css';

export const ShopItem: React.FC<ShopItemInt> = (props: ShopItemInt) => {
  const {
    id, image, title, price, description, rating, showMoreInfoToggler,
  } = props;

  return (
    <li key={id}>
      <div className="shop-item">
        <div className="shop-item__img">
          <img src={image} alt="img-1" />
        </div>
        <div className="shop-item__info">
          <div className="shop-item__header">
            <button className="shop-item__title-button" onClick={() => showMoreInfoToggler(id)} type="button">
              {title}
            </button>
            <div className="shop-item__price">
              $
              {price}
            </div>
          </div>
          <div className="shop-item__description">
            {trimDescription(description)}
          </div>
          <div className="shop-item__footer">
            <ItemRating rating={rating} />
            <button className="shop-item__button" type="button">Add to cart</button>
          </div>
        </div>
      </div>
    </li>
  );
};
