import { IsInt, IsPositive, IsString, Max, Min } from 'class-validator';

export class CreateProductDto {
  @IsString({ message: 'title must be string' })
  title: string;

  @IsPositive({ message: 'price must be positive number' })
  price: number;

  @IsInt({ message: 'rating must be integer' })
  @Min(0)
  @Max(5)
  rating: number;

  @IsString({ message: 'description must be string' })
  description: string;

  @IsString({ message: 'image must be string' })
  image: string;
}
