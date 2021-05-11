import {
  Controller, Body, Param, 
  Get, Post, Put, Delete
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Post()
  async createProduct(@Body() dto: CreateProductDto) {
    return this.productsService.createProduct(dto);
  }

  @Get()
  async getProductsList() {
    const productsList = await this.productsService.getProductsList();
    return productsList;
  }

  @Get(':id')
  async getProduct(@Param('id') id: number) {
    const product = await this.productsService.getProduct(id);
    return product;
  }

  @Put(':id')
  async updateProduct(
    @Param('id') id: number,
    @Body() dto: CreateProductDto) {
    this.productsService.updateProduct(id, dto);

    return `Product ${id} was updated`;
  }

  @Delete(':id')
  async removeProduct(
    @Param('id') id: number) {
    this.productsService.removeProduct(id);

    return `Product ${id} was removed`;
  }
}
