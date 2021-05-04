interface ShopItemInt {
  id: number,
  image: string,
  title: string,
  price: number,
  description: string,
  rating: number,
  active?: boolean,
  showMoreInfoToggler?: any,
}

export default ShopItemInt;
