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
  UsePipes,
} from '@nestjs/common';
import { ILike } from 'typeorm';

import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';
import { FilterPropsSchema } from './schemas/filter-props.schema';
import { FilterPropsValidationPipe } from './pipes/filter-props-validation.pipe';
import { CreateProductDto } from './dto/create-product.dto';
import { ISQLFilterQueryResult } from './interfaces/sqlFilterQueryResult.interface';
import { IValidatedFilteringProps } from './interfaces/validatedFilteringProps.interface';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  private readonly maxItemsOnPage = 5;

  @Post()
  @HttpCode(204)
  createProduct(@Body(new ValidationPipe()) dto: CreateProductDto): Promise<CreateProductDto> {
    return this.productsService.createProduct(dto);
  }

  @Get()
  async getProductsList(): Promise<Product[]> {
    return await this.productsService.getProductsList();
  }

  @Get('filter')
  @UsePipes(new FilterPropsValidationPipe(FilterPropsSchema))
  async getFilteredProductsList(@Query() params: IValidatedFilteringProps): Promise<IFilteringResult> {
    const { page, description, orderBy } = params;

    const [orderParam, orderMethod] = orderBy;
    const offsetNumber = this.getOffsetNumber(page);
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
    return await this.productsService.getProduct(id);
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

  getSQLFilterQuery(description: string): ISQLFilterQueryResult {
    return { description: ILike(description) };
  }

  getPagesQuantity(productsQuantity: number): number {
    return Math.ceil(productsQuantity / this.maxItemsOnPage);
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

interface IFilteringResult {
  items: Product[];
  pages: number;
}
