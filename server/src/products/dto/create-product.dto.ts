import { IsEmpty, IsInt, IsPositive, IsString, Max, Min } from 'class-validator';

export class CreateProductDto {
  @IsEmpty({ message: 'must be empty' })
  id?: number;

  @IsString({ message: 'must be string' })
  title: string;

  @IsPositive({ message: 'must be positive number' })
  price: number;

  @IsInt({ message: 'must be integer' })
  @Min(0)
  @Max(5)
  rating: number;

  @IsString({ message: 'must be string' })
  description: string;

  @IsString({ message: 'must be string' })
  image: string;
}
