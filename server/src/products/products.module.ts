import { Module } from '@nestjs/common';
import {
  ProductsController, ProductsService,
} from './imports';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
