import { Injectable } from '@nestjs/common';
import { ProductInt } from './interfaces/product.interface';

@Injectable()
export class ProductsService {
  private readonly products: ProductInt[] = [];

  createProduct(product: any) {
    this.products.push(product);
  }

  getProductsList(): ProductInt[] {
    return this.products;
  }

  getProduct(id: number): ProductInt {
    const idx = this.findProductIdx(id);
    return this.products[idx];
  }

  updateProduct(id: number, props: any): void {
    const idx = this.findProductIdx(id);

    this.products[idx] = {
      ...this.products[idx],
      ...props
    };
  }

  removeProduct(id: number): void {
    const idx = this.findProductIdx(id);
    this.products.splice(idx, 1);
  }

  private findProductIdx(id: number): number {
    const idx = this.products.findIndex(
      item => item.id === id
    );

    return idx;
  }
}
