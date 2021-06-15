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
  async getFilteredProductsList(@Query() query: FilterQueryProps): Promise<IFilteringResult> {
    const { page = 1, description = '', orderBy = '' } = query;

    const pageNumber = Number(page);
    const offsetNumber = this.getOffsetNumber(pageNumber);

    const orderProps = orderBy.split(' ') || '';
    const orderParam = this.getOrderParam(orderProps[0] || '');
    const orderMethod = this.getOrderMethod(orderProps[1] || '');

    const filterQuery = this.getSQLFilterQuery(description);

    const pagesQuantity = await this.productsService.countFilteredProductsList(filterQuery);

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
    const descriptionQuery = this.getSQLFilterQueryByDescription(description);

    return `${descriptionQuery}`;
  }

  getSQLFilterQueryByDescription(description: string): string {
    return `description ILIKE '%${description}%'`;
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
    if (orderMethod.toUpperCase() === 'DESC') {
      return 'DESC';
    }

    return 'ASC';
  }
}

interface UpdateDeleteResult {
  status: string;
  id: number;
}

interface FilterQueryProps {
  page: string;
  description: string;
  orderBy: string;
}

interface IFilteringResult {
  items: Product[];
  pages: number;
}
