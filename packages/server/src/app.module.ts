import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';

import { config } from 'ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(config), ProductsModule, UsersModule],
})
export class AppModule {}
