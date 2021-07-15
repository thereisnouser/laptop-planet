import { object, number, string, array, not } from 'joi';

const orderParams = ['price', 'rating'];
const orderMethods = ['ASC', 'DESC'];

export const FilterPropsSchema = object({
  page: number().default(1),
  description: string().default(''),
  orderBy: array()
    .items(
      string()
        .empty(not(...orderParams, ...orderMethods))
        .default(''),
    )
    .empty(['', string()])
    .default(['', 'ASC']),
});
