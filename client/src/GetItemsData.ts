import {
  ShopItemInt,
  img1,
} from './imports';

function getItemsData() {
  const listItems: Array<ShopItemInt> = [
    {
      id: 1,
      image: img1,
      title: 'E210MA-GJ002T',
      price: 300,
      description: '11.6" Ноутбук ASUS Laptop E210MA-GJ002T розовый [1366x768, TN+film, Intel Celeron N4020, 2 х 1.1 ГГц, RAM 4 ГБ, eMMC 64 ГБ, Intel UHD 600 , Wi-Fi, Windows 10 Home]',
      rating: 4,
    },
  ];

  return listItems;
}

export default getItemsData;
