import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
  @Post()
  async createProduct(@Body() CreateProductDto: CreateProductDto) {
    return 'Product is created';
  }

  @Get()
  getProductsList(): string {
    return 'Products list is here';
  }

  @Get(':id')
  getProduct(@Param('id') id: string): string {
    return `Product ${id} is here`;
  }

  @Put(':id')
  updateProduct(@Param('id') id: string): string {
    return `Product ${id} is updated`;
  }

  @Delete(':id')
  removeProduct(@Param('id') id: string): string {
    return `Product ${id} is removed`;
  }
}
