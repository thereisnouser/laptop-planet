import { IsInt, IsString } from 'class-validator';

export class FilterProductsListDto {
  @IsInt()
  page: number;

  @IsString()
  description: string;

  @IsString()
  orderBy: string;
}
