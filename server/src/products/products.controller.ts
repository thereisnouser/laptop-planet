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
  createProduct(@Body() dto: CreateProductDto) {
    return this.productsService.createProduct(dto);
  }

  @Get()
  getProductsList() {
    return this.productsService.getProductsList();
  }

  @Get(':id')
  getProduct(@Param('id') id: number) {
    return this.productsService.getProduct(id);
  }

  @Put(':id')
  async updateProduct(
    @Param('id') id: number,
    @Body() dto: CreateProductDto) {
    await this.productsService.updateProduct(id, dto);

    return `Product ${id} was updated`;
  }

  @Delete(':id')
  async removeProduct(
    @Param('id') id: number) {
    await this.productsService.removeProduct(id);

    return `Product ${id} was removed`;
  }
}
