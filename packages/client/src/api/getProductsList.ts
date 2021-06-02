import { useEffect, useState } from 'imports';
import { SERVER } from 'constants';

export const getProductsList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`${SERVER}api/products/`)
      .then(res => res.json())
      .then(res => setItems(res));
  }, []);

  return items;
};
