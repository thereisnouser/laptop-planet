export const getPagesQuantity = async () => {
  const response = await fetch('/api/products/count');
  return response.json();
};
