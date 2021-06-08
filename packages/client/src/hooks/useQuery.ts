import { useEffect, useHistory, useLocation, useState } from 'imports';

export const useQuery = (property = '', value = '') => {
  const history = useHistory();
  const location = useLocation();
  const [query, setQuery] = useState(new URLSearchParams(location.search));

  const updateQuery = (property: string, value: string) => {
    const newQuery = new URLSearchParams(location.search);

    if (newQuery.has(property) && value === '') {
      newQuery.delete(property);
    } else if (newQuery.has(property)) {
      newQuery.set(property, value);
    } else if (property && value) {
      newQuery.append(property, value);
    }

    setQuery(newQuery);

    history.push({
      search: newQuery.toString(),
    });
  };

  useEffect(() => {
    updateQuery(property, value);
  }, [property, value]);

  return [query, updateQuery] as const;
};
