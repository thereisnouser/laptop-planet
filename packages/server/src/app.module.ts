import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductsModule } from './products/products.module';

import { config } from 'ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(config), ProductsModule],
})
export class AppModule {}
