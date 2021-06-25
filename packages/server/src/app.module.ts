import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { ProductsModule } from './products/products.module';

import { config } from 'ormconfig';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env.template`,
    }),
    TypeOrmModule.forRoot(config),
    ProductsModule,
  ],
})
export class AppModule {}
