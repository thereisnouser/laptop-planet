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
  ParseIntPipe,
} from '@nestjs/common';

import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  private readonly maxItemsOnPage = 5;
  private readonly orderParams = ['price', 'rating'];

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
    @Query('page', ParseIntPipe) page = 1,
    description = '',
    orderBy = '',
  ): Promise<IFilteringResult> {
    const offsetNumber = this.getOffsetNumber(page);

    const [queryOrderParam, queryOrderMethod] = orderBy.split(' ');
    const orderParam = this.getOrderParam(queryOrderParam);
    const orderMethod = this.getOrderMethod(queryOrderMethod);

    const filterQuery = this.getSQLFilterQuery(description);

    const productsQuantity = await this.productsService.countFilteredProductsList(filterQuery);
    const pagesQuantity = this.getPagesQuantity(productsQuantity);

    const productsList = await this.productsService.getFilteredProductsList({
      filterQuery,
      orderParam,
      orderMethod,
      offsetNumber,
      limitNumber: this.maxItemsOnPage,
    });

    return {
      items: productsList,
      pages: pagesQuantity,
    };
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

  getSQLFilterQuery(description: string): string {
    return this.getSQLFilterQueryByDescription(description);
  }

  getSQLFilterQueryByDescription(description: string): string {
    return `description ILIKE '%${description}%'`;
  }

  getPagesQuantity(productsQuantity: number): number {
    const pages = Math.ceil(productsQuantity / this.maxItemsOnPage);

    return pages;
  }

  getOffsetNumber(page: number): number {
    if (page > 0) {
      return this.maxItemsOnPage * (page - 1);
    }

    return 0;
  }

  getOrderParam(orderParam: string): string {
    const isOrderParamExist = this.orderParams.includes(orderParam);

    if (isOrderParamExist) {
      return orderParam;
    }

    return '';
  }

  getOrderMethod(orderMethod: string): 'ASC' | 'DESC' {
    if (orderMethod && orderMethod.toUpperCase() === 'DESC') {
      return 'DESC';
    }

    return 'ASC';
  }
}

interface UpdateDeleteResult {
  status: string;
  id: number;
}

interface IFilteringResult {
  items: Product[];
  pages: number;
}
