export const getPagesQuantity = async (): Promise<number> => {
  const response = await fetch('/api/products/count');
  return response.json();
};
