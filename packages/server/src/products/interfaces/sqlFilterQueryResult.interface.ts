import { FindOperator } from 'typeorm';

export interface ISQLFilterQueryResult {
  description: FindOperator<string>;
}
