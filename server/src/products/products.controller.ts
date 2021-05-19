import {
  Controller, Body, Param, 
  Get, Post, Put, Delete
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}
  
  @Post()
  createProduct(@Body() dto: CreateProductDto): Promise<CreateProductDto> {
    return this.productsService.createProduct(dto);
  }

  @Get()
  getProductsList(): Promise<Product[]> {
    return this.productsService.getProductsList();
  }

  @Get(':id')
  getProduct(@Param('id') id: number): Promise<Product> {
    return this.productsService.getProduct(id);
  }

  @Put(':id')
  async updateProduct(
    @Param('id') id: number,
    @Body() dto: CreateProductDto): Promise<UpdateDeleteResult> {
    await this.productsService.updateProduct(id, dto);

    return {
      "status": "Product was updated",
      "id": id
    };
  }

  @Delete(':id')
  async removeProduct(
    @Param('id') id: number): Promise<UpdateDeleteResult> {
    await this.productsService.removeProduct(id);

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
