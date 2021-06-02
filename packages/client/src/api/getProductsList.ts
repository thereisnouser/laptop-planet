export const getProductsList = async () => {
  const response = await fetch('/api/products/');
  return await response.json();
};
