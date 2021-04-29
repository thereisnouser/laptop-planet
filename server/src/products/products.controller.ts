import {
  Controller,
  Body, Param,
  Get, Post, Patch, Delete,
} from '@nestjs/common';
import {
  ProductsService,
  ProductInt, CreateProductDto, UpdateProductDto,
} from './imports';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Post()
  async createProduct(@Body() createProductDto: CreateProductDto) {
    this.productsService.createProduct(createProductDto);
  }

  @Get()
  async getProductsList(): Promise<ProductInt[]> {
    return this.productsService.getProductsList();
  }

  @Get(':id')
  async getProduct(@Param('id') id: number): Promise<ProductInt> {
    return this.productsService.getProduct(id);
  }

  @Patch(':id')
  async updateProduct(@Param('id') id: number, @Body() updateProductDto: UpdateProductDto) {
    this.productsService.updateProduct(id, updateProductDto)
  }

  @Delete(':id')
  async removeProduct(@Param('id') id: number) {
    this.productsService.removeProduct(id);
  }
}
