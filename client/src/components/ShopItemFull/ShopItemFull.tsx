import {
  React, ShopItemInt, ItemRating,
} from '../../imports';
import './ShopItemFull.css';

const ShopItemFull: React.FC<ShopItemInt> = (props: ShopItemInt) => {
  const {
    id, image, title, price, description, rating, showMoreInfoToggler,
  } = props;

  return (
    <div className="container">
      <div className="shop-item-full">
        <div className="shop-item-full__img">
          <img src={image} alt="img-1" />
        </div>
        <div className="shop-item-full__info">
          <div className="shop-item-full__header">
            <div className="shop-item-full__title">
              <button className="shop-item-full__title-button" onClick={() => showMoreInfoToggler(id)} type="button">
                {title}
              </button>
            </div>
            <ItemRating rating={rating} />
          </div>
          <div className="shop-item-full__description">
            {description}
          </div>
          <div className="shop-item-full__footer">
            <div className="shop-item-full__price">
              $
              {price}
            </div>
            <button className="shop-item-full__button" type="button">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopItemFull;
