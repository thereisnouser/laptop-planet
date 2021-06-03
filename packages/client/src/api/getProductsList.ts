import { IShopItem } from 'imports';

export const getProductsList = async (): Promise<IShopItem[]> => {
  const response = await fetch('/api/products/');
  return await response.json();
};
