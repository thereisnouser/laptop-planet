import { useEffect, useState } from 'imports';

export const GetProductsList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/api/products/')
      .then(res => res.json())
      .then(res => setItems(res));
  }, []);

  return items;
};
