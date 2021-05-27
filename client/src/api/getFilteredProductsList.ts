import {
  useEffect, useState,
} from '../imports';

const getFilteredProductsList = (filterQuery: string) => {
  const url = `http://localhost:5000/api/products/filter?${filterQuery}`;
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setItems(res));
  }, [url]);

  return items;
};

export default getFilteredProductsList;
