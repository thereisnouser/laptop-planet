import React from 'react';

import ShopListItemInt from '../../shopListItemInt';
import ShopListItem from '../shopListItem/shopListItem';

import img1 from './images/img-1.jpg';

const ShopList: React.FC = () => {
  const listItems: Array<ShopListItemInt> = [
    {
      id: 1,
      image: img1,
      title: 'E210MA-GJ002T',
      price: 300,
      description: '11.6" Ноутбук ASUS Laptop E210MA-GJ002T розовый [1366x768, TN+film, Intel Celeron N4020, 2 х 1.1 ГГц, RAM 4 ГБ, eMMC 64 ГБ, Intel UHD 600 , Wi-Fi, Windows 10 Home]',
      rating: 4,
    },
  ];

  return (
    <ul>
      <ShopListItem
        id={listItems[0].id}
        image={listItems[0].image}
        title={listItems[0].title}
        price={listItems[0].price}
        description={listItems[0].description}
        rating={listItems[0].rating}
      />
    </ul>
  );
};

export default ShopList;
