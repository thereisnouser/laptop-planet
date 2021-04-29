import {
  Controller,
  Body, Param,
  Get, Post, Patch, Delete
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
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
  async getProduct(@Param('id') id: number): Promise<Product> {
    return this.productsService.findOne(id);
  }

  @Patch(':id')
  async updateProduct(@Param('id') id: number, @Body() updateProductDto: UpdateProductDto) {
    this.productsService.update(id, updateProductDto)
  }

  @Delete(':id')
  async removeProduct(@Param('id') id: number) {
    this.productsService.delete(id);
  }
}
