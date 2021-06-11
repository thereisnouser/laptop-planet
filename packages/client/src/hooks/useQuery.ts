import { useHistory, useLocation, useState } from 'imports';

export const useQuery = () => {
  const history = useHistory();
  const location = useLocation();
  const [query, setQuery] = useState(new URLSearchParams(location.search));

  const updateQuery = (property = '', value = '') => {
    const newQuery = new URLSearchParams(location.search);

    if (newQuery.has(property)) {
      newQuery.set(property, value);
    } else if (property && value) {
      newQuery.append(property, value);
    }

    setQuery(newQuery);

    history.push({
      search: newQuery.toString(),
    });
  };

  return [query, updateQuery] as const;
};
