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

  private maxItemsOnPage = 5;

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
  async getFilteredProductsList(
    @Query('description') description: string,
    @Query('page') page: string,
  ): Promise<Product[]> {
    const pageNumber = Number(page);
    const offsetNumber = this.getOffsetNumber(pageNumber);
    const descriptionQuery = description ? `description ILIKE '%${description}%'` : '';
    const filterQuery = `${descriptionQuery}`;

    const productsList = await this.productsService.getFilteredProductsList(
      filterQuery,
      offsetNumber,
      this.maxItemsOnPage,
    );

    return productsList;
  }

  @Get(':id')
  async getProduct(@Param('id') id: number): Promise<Product | undefined> {
    const product = await this.productsService.getProduct(id);

    return product;
  }

  @Put(':id')
  async updateProduct(@Param('id') id: number, @Body() dto: CreateProductDto): Promise<UpdateDeleteResult> {
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

  getOffsetNumber(page: number): number {
    if (page > 0) {
      return this.maxItemsOnPage * (page - 1);
    }

    return 0;
  }
}

interface UpdateDeleteResult {
  status: string;
  id: number;
}
