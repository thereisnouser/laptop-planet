import {
  Controller,
  Body,
  Param,
  Delete,
  Get,
  Post,
  Put,
  HttpCode,
  BadRequestException,
  ValidationPipe,
  Query,
} from '@nestjs/common';

import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Post()
  @HttpCode(204)
  createProduct(@Body(new ValidationPipe()) dto: CreateProductDto): Promise<CreateProductDto> {
    return this.productsService.createProduct(dto);
  }

  @Get()
  async getProductsList(): Promise<Product[]> {
    const productsList = await this.productsService.getProductsList();

    return productsList;
  }

  @Get('filter')
  async getFilteredProductsList(@Query('description') description: string): Promise<Product[]> {
    let productsList = await this.productsService.getProductsList();

    productsList = await this.filterProductsList(productsList, description);

    return productsList;
  }

  @Get(':id')
  async getProduct(@Param('id') id: number): Promise<Product | undefined> {
    const product = await this.productsService.getProduct(id);

    return product;
  }

  @Put(':id')
  async updateProduct(
    @Param('id') id: number,
    @Body(new ValidationPipe()) dto: CreateProductDto,
  ): Promise<UpdateDeleteResult> {
    const product = await this.productsService.getProduct(id);
    if (!product) {
      throw new BadRequestException();
    }

    await this.productsService.updateProduct(id, dto);

    return {
      status: 'Product was updated',
      id: id,
    };
  }

  @Delete(':id')
  async removeProduct(@Param('id') id: number): Promise<UpdateDeleteResult> {
    const product = await this.productsService.getProduct(id);
    if (!product) {
      throw new BadRequestException();
    }

    await this.productsService.removeProduct(id);

    return {
      status: 'Product was removed',
      id: id,
    };
  }

  async filterProductsList(list: Product[], description: string): Promise<Product[]> {
    list = await this.filterByDescription(list, description);

    return list;
  }

  filterByDescription(list: Product[], description: string): Product[] {
    if (description) {
      list = list.filter(item => item.description.toLowerCase().includes(description.toLowerCase()));
    }

    return list;
  }
}

interface UpdateDeleteResult {
  status: string;
  id: number;
}
