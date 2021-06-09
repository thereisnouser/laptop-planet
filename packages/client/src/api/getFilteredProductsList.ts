import { IShopItem } from 'imports';

export const getFilteredProductsList = async (query: string): Promise<IShopItem[]> => {
  const response = await fetch(`/api/products/filter?${query}`);
  return await response.json();
};
