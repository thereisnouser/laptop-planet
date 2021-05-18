import {
  IShopItem,
  img1, img2, img3,
} from '../imports';

export function getItemsData(): IShopItem[] {
  const listItems = [
    {
      id: 1,
      image: img1,
      title: 'ASUS E210MA-GJ002T',
      price: 300,
      description: '11.6" ASUS Laptop E210MA-GJ002T pink [1366x768, TN+film, Intel Celeron N4020, 2 х 1.1 GHz, RAM 4 Gb, eMMC 64 Gb, Intel UHD 600 , Wi-Fi, Windows 10 Home]. Also this laptop has Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum risus dui, tempus at tincidunt eget, varius nec dolor.',
      rating: 4,
      active: false,
    },
    {
      id: 2,
      image: img2,
      title: 'Irbis NB260',
      price: 350,
      description: '15.6" Laptop Irbis NB260 black [1920x1080, IPS, Intel Celeron N3350, 2 х 1.1 GHz, RAM 4 Gb, eMMC 64 Gb, Intel HD 500 , Wi-Fi, BT, Windows 10 Home]. Also this laptop has Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum risus dui, tempus at tincidunt eget, varius nec dolor. Aliquam fringilla condimentum augue. Sed eget augue vulputate, maximus sapien id, ultrices diam. Aliquam erat volutpat.',
      rating: 5,
      active: false,
    },
    {
      id: 3,
      image: img3,
      title: 'IdeaPad Slim 1-11AST-05',
      price: 340,
      description: '11.6" Laptop Lenovo IdeaPad Slim 1-11AST-05 gray [1366x768, TN+film, AMD A9 9420e, 2 х 1.8 GHz, RAM 4 Gb, eMMC 64 Gb, Radeon R5 , Wi-Fi, Windows 10 Home]',
      rating: 2,
      active: false,
    },
  ];

  return listItems;
}
