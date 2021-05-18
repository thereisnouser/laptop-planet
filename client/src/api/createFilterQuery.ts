import {
  IFilterProps,
} from '../imports';

export const createFilterQuery = (params: IFilterProps): string => {
  let query: string = '';

  for (const [key, value] of Object.entries(params)) {
    if ((key === 'description' && value === '')
      || (key === 'page' && value <= 1)) {
      continue;
    }

    query += `&${key}=${value}`;
  }

  return query;
};
