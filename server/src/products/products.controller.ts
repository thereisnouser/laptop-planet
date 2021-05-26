import {
  Controller, Body, Param,
  Delete, Get, Post, Put,
  NotFoundException, BadRequestException, ValidationPipe,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Post()
  createProduct(@Body(new ValidationPipe()) dto: CreateProductDto): Promise<CreateProductDto> {
    return this.productsService.createProduct(dto);
  }

  @Get()
  async getProductsList(): Promise<Product[]> {
    const productsList = await this.productsService.getProductsList();
    if (!productsList) throw new NotFoundException();

    return productsList;
  }

  @Get(':id')
  async getProduct(@Param('id') id: number): Promise<Product> {
    const product = await this.productsService.getProduct(id);
    if(!product) throw new NotFoundException();

    return product;
  }

  @Put(':id')
  async updateProduct(
    @Param('id') id: number,
    @Body(new ValidationPipe()) dto: CreateProductDto): Promise<UpdateDeleteResult> {
    const product = await this.productsService.getProduct(id);
    if(!product) throw new BadRequestException();

    this.productsService.updateProduct(id, dto);

    return {
      "status": "Product was updated",
      "id": id
    };
  }

  @Delete(':id')
  async removeProduct(
    @Param('id') id: number): Promise<UpdateDeleteResult> {
    const product = await this.productsService.getProduct(id);
    if(!product) throw new BadRequestException();

    this.productsService.removeProduct(id);

    return {
      "status": "Product was removed",
      "id": id
    };
  }
}

interface UpdateDeleteResult {
  status: string;
  id: number;
};
