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
    const product = this.findProductAndId(id)[0];
    return product;
  }

  updateProduct(id: number, props: any): void {
    const [product, idx] = this.findProductAndId(id);
    this.products[idx] = {...this.products[idx], ...props};
  }

  removeProduct(id: number): void {
    const idx = this.findProductAndId(id)[1];
    this.products.splice(idx, 1);
  }

  private findProductAndId(id: number): [ProductInt, number] {
    const productIdx = this.products.findIndex((item) => item.id === id);
    const product = this.products[productIdx];

    return [product, productIdx];
  }
}
