import { useEffect, useState } from 'react';

const getItemsData = () => {
  const SERVER = 'http://localhost:5000/';
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`${SERVER}api/products/`)
      .then(res => res.json())
      .then(res => setItems(res))
  }, []);

  return items;
}

export default getItemsData;
