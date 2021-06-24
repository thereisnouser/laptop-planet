import { FindOperator } from 'typeorm';

export interface SQLFilterQueryResult {
  description: FindOperator<string>;
}
