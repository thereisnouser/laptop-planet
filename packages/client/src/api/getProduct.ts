import { IShopItem } from 'imports';

export const getProduct = async (id: number): Promise<IShopItem> => {
  const response = await fetch(`/api/products/${id}`);
  return await response.json();
};
