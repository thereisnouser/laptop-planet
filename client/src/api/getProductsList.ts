import { useEffect, useState } from 'react';
import { SERVER } from '../imports';

export const getProductsList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`${SERVER}api/products/`)
      .then(res => res.json())
      .then(res => setItems(res));
  }, []);

  return items;
};
