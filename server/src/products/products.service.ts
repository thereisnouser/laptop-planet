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
    const product = this.findProduct(id)[0];
    return product;
  }

  update(id: string, props: Product): void {
    const [product, idx] = this.findProduct(id);
    this.products[idx] = {...this.products[idx], ...props};
  }

  private findProduct(id: string): [Product, number] {
    const productIdx = this.products.findIndex((item) => item.id === id);
    const product = this.products[productIdx];

    if (!product) {
      throw new NotFoundException('Could not find the product...');
    }

    return [product, productIdx];
  }
}
