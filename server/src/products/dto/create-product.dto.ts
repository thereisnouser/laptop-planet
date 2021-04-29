export class CreateProductDto {
  id: string;
  title: string;
  price: number;
  rating?: number;
  description?: string;
}