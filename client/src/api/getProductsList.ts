import {
  useEffect, useState,
} from '../imports';

const getProductsList = () => {
  const url = 'http://localhost:5000/api/products';
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setItems(res));
  }, [url]);

  return items;
};

export default getProductsList;
