import { IShopItem } from 'imports';

export const getFilteredProductsList = async (description: string): Promise<IShopItem[]> => {
  const descriptionQuery = `description=${description}`;
  const response = await fetch(`/api/products/filter?${descriptionQuery}`);

  return await response.json();
};
