import { object, number, string } from 'joi';

export const FilterPropsSchema = object({
  page: number().default(1),
  description: string().default(''),
  orderBy: string().default(''),
});
