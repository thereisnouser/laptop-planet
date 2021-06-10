import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  createProduct(dto: CreateProductDto): Promise<CreateProductDto> {
    return this.productRepository.save(dto);
  }

  getProductsList(): Promise<Product[]> {
    return this.productRepository.find();
  }

  getFilteredProductsList(props: SQLQueryProps): Promise<Product[]> {
    const { filterQuery, offsetNumber, limitNumber } = props;

    return this.productRepository
      .createQueryBuilder('product')
      .where(filterQuery)
      .offset(offsetNumber)
      .limit(limitNumber)
      .getMany();
  }

  getProduct(id: number): Promise<Product | undefined> {
    return this.productRepository.findOne(id);
  }

  updateProduct(id: number, dto: CreateProductDto): Promise<UpdateResult> {
    return this.productRepository.update(id, dto);
  }

  removeProduct(id: number): Promise<DeleteResult> {
    return this.productRepository.delete(id);
  }
}

interface SQLQueryProps {
  filterQuery: string;
  offsetNumber: number;
  limitNumber: number;
}
