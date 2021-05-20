import {
  Controller, Body, Param, Query,
  Delete, Get, Post, Put,
  UsePipes, NotFoundException, BadRequestException,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';
import { ValidationPipe } from './pipes/validation.pipe';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  private productsQuantity: number = 1;
  private maxItemsOnPage = 5;

  @UsePipes(ValidationPipe)
  @Post()
  createProduct(@Body() dto: CreateProductDto): Promise<CreateProductDto> {
    return this.productsService.createProduct(dto);
  }

  @Get()
  async getProductsFilterList(@Query() query): Promise<Product[]> {
    let productsList = await this.productsService.getProductsList();
    if (!productsList) throw new NotFoundException();

    productsList = await this.filterProductsList(productsList, query);

    return productsList;
  }

  @Get('count')
  async getPagesQuantity(): Promise<number> {
    const pages = await Math.ceil(this.productsQuantity / 5);
    return pages;
  }

  @Get(':id')
  async getProduct(@Param('id') id: number): Promise<Product> {
    const product = await this.productsService.getProduct(id);
    if(!product) throw new NotFoundException();

    return product;
  }

  @UsePipes(ValidationPipe)
  @Put(':id')
  async updateProduct(
    @Param('id') id: number,
    @Body() dto: CreateProductDto): Promise<string> {
    const product = await this.productsService.getProduct(id);
    if(!product) throw new BadRequestException();

    this.productsService.updateProduct(id, dto);

    return `Product ${id} was updated`;
  }

  @Delete(':id')
  async removeProduct(
    @Param('id') id: number): Promise<string> {
    const product = await this.productsService.getProduct(id);
    if(!product) throw new BadRequestException();

    this.productsService.removeProduct(id);

    return `Product ${id} was removed`;
  }

  async filterProductsList(list: Product[], { description, page }): Promise<Product[]> {
    list = await this.filterByDescription(list, description);

    this.productsQuantity = list.length;

    list = await this.filterByPage(list, +page);

    return list;
  }

  filterByDescription(list: Product[], description: string): Product[] {
    if (description) {
      list = list.filter((item) => (
        item.description.toLowerCase().includes(description.toLowerCase())
      ));
    }

    return list;
  }

  filterByPage(list: Product[], page: number): Product[] {
    if (page > 0) {
      list = list.slice(
        this.maxItemsOnPage * (page - 1),
        this.maxItemsOnPage * (page - 1) + this.maxItemsOnPage
      );
    } else {
      list = list.slice(0, this.maxItemsOnPage);
    }

    return list;
  }
}
