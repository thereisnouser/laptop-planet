import { Module } from '@nestjs/common';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class AppModule {}
