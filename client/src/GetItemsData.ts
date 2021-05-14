import { useEffect, useState } from 'react';

const getItemsData = (description?: string) => {
  const url = `http://localhost:5000/api/products/filter?description=${description}`;
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setItems(res));
  }, [description]);

  return items;
};

export default getItemsData;
