import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsService } from './products.service';
import { Product } from './interfaces/product.interface';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Post()
  async createProduct(@Body() createProductDto: CreateProductDto) {
    this.productsService.create(createProductDto);
  }

  @Get()
  async getProductsList(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Get(':id')
  async getProduct(@Param('id') id: string): Promise<Product> {
    return this.productsService.findOne(id);
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
