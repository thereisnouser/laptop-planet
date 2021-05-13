import {
  React, IShopItem, ItemRating,
} from '../../imports';
import './ShopItemFull.css';

export const ShopItemFull: React.FC<IShopItem> = ({
  id, image, title, price, description, rating,
}): React.ReactElement => (
  <div className="container">
    <div className="shop-item-full" key={id}>
      <div className="shop-item-full__img">
        <img src={image} alt="img-1" />
      </div>
      <div className="shop-item-full__info">
        <div className="shop-item-full__header">
          <div className="shop-item-full__title">
            <button className="shop-item-full__title-button" type="button">
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
