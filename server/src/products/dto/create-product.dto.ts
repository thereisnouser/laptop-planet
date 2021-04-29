export class CreateProductDto {
  id: number;
  title: string;
  price: number;
  rating?: number;
  description?: string;
}