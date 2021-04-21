import React from 'react';

import ShopListItemInt from '../../shopListItemInt';

const ShopListItem: React.FC<ShopListItemInt> = (props: ShopListItemInt) => {
  const {
    id, image, title, price, description, rating,
  } = props;

  return (
    <li>
      <div className="shop-list-item">
        <img src={image} alt="img-1" />
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
          <p>{description}</p>
          <div className="shop-list-item__footer">
            <div className="shop-list-item__rating">{rating}</div>
            <button type="button">Add to cart</button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ShopListItem;
