import {
  Controller, Body, Param, Query,
  Delete, Get, Post, Put,
  UsePipes, NotFoundException, BadRequestException,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ValidationPipe } from './pipes/validation.pipe';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @UsePipes(ValidationPipe)
  @Post()
  createProduct(@Body() dto: CreateProductDto) {
    return this.productsService.createProduct(dto);
  }

  @Get()
  async getProductsList() {
    let productsList = await this.productsService.getProductsList();
    if (!productsList) throw new NotFoundException();

    return productsList;
  }

  @Get('filter')
  async getProductsFilterList(@Query('description') description) {
    let productsList = await this.productsService.getProductsList();
    if (!productsList) throw new NotFoundException();

    if (description) {
      productsList = productsList.filter((item) => (
        item.description.toLowerCase().includes(description.toLowerCase())
      ));
    }

    return productsList;
  }

  @Get(':id')
  async getProduct(@Param('id') id: number) {
    const product = await this.productsService.getProduct(id);
    if(!product) throw new NotFoundException();

    return product;
  }

  @UsePipes(ValidationPipe)
  @Put(':id')
  async updateProduct(
    @Param('id') id: number,
    @Body() dto: CreateProductDto) {
    const product = await this.productsService.getProduct(id);
    if(!product) throw new BadRequestException();

    this.productsService.updateProduct(id, dto);

    return `Product ${id} was updated`;
  }

  @Delete(':id')
  async removeProduct(
    @Param('id') id: number) {
    const product = await this.productsService.getProduct(id);
    if(!product) throw new BadRequestException();

    this.productsService.removeProduct(id);

    return `Product ${id} was removed`;
  }
}
