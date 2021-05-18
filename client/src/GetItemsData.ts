import {
  useEffect, useState,
  createFilterQuery, IFilterProps,
} from './imports';

const getItemsData = (params: IFilterProps) => {
  const filterQuery: string = createFilterQuery(params);
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
