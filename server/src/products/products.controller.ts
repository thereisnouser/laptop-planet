import { Controller, Body, Param, Get, Post, Put, Delete } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Post()
  async createProduct(
    @Body() dto: CreateProductDto) {
    this.productsService.createProduct(dto);
  }

  @Get()
  async getProductsList(): Promise<Array<any>> {
    return this.productsService.getProductsList();
  }

  @Get(':id')
  async getProduct(
    @Param('id') id: number): Promise<Array<any>> {
    return this.productsService.getProduct(id);
  }

  @Put(':id')
  async updateProduct(
    @Param('id') id: number,
    @Body() dto: CreateProductDto) {
    this.productsService.updateProduct(id, dto)
  }

  @Delete(':id')
  async removeProduct(
    @Param('id') id: number) {
    this.productsService.removeProduct(id);
  }
}
