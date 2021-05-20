import {
  useEffect, useState,
} from '../imports';

const getPagesQuantity = () => {
  const url = 'http://localhost:5000/api/products/count';
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setQuantity(res));
  });

  return quantity;
};

export default getPagesQuantity;
