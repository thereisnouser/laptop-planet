import { useEffect, useState } from 'react';
import { IFilterProps } from './imports';

const getItemsData = (params: IFilterProps) => {
  let filterQuery: string = '';

  for (const [key, value] of Object.entries(params)) {
    filterQuery += `&${key}=${value}`;
  }

  const url = `http://localhost:5000/api/products/filter?${filterQuery}`;
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setItems(res));
  }, [filterQuery]);

  return items;
};

export default getItemsData;
