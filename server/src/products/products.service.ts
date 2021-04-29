import { Injectable } from '@nestjs/common';
import { Product } from './interfaces/product.interface';

@Injectable()
export class ProductsService {
  private readonly products: Product[] = [];

  create(product: any) {
    this.products.push(product);
  }

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: number): Product {
    const product = this.findProduct(id)[0];
    return product;
  }

  update(id: number, props: any): void {
    const [product, idx] = this.findProduct(id);
    this.products[idx] = {...this.products[idx], ...props};
  }

  delete(id: number): void {
    const idx = this.findProduct(id)[1];
    this.products.splice(idx, 1);
  }

  private findProduct(id: number): [Product, number] {
    const productIdx = this.products.findIndex((item) => item.id === id);
    const product = this.products[productIdx];

    return [product, productIdx];
  }
}
