import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './interfaces/product.interface';

@Injectable()
export class ProductsService {
  private readonly products: Product[] = [];

  create(product: Product) {
    this.products.push(product);
  }

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: string): Product {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException('Could not find the product...');
    }

    return product;
  }
}
