import { Controller, Body, Param, Get, Post, Patch, Delete } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Post()
  async createProduct(
    @Body() createProductDto: CreateProductDto) {
    this.productsService.createProduct(createProductDto);
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

  @Patch(':id')
  async updateProduct(
    @Param('id') id: number,
    @Body() updateProductDto: UpdateProductDto) {
    this.productsService.updateProduct(id, updateProductDto)
  }

  @Delete(':id')
  async removeProduct(
    @Param('id') id: number) {
    this.productsService.removeProduct(id);
  }
}
