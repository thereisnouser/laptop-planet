import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>
  ) {}

  async createProduct(dto: CreateProductDto): Promise<CreateProductDto> {
    return await this.productRepository.save(dto);
  }

  async getProductsList(): Promise<Array<CreateProductDto>> {
    return await this.productRepository.find();
  }

  async getProduct(id: number): Promise<CreateProductDto> {
    return await this.productRepository.findOne(id);
  }

  async updateProduct(id: number, dto: CreateProductDto): Promise<any> {
    return await this.productRepository.update(id, dto);
  }

  async removeProduct(id: number): Promise<any> {
    return await this.productRepository.delete(id);
  }
}
