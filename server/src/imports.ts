import { NestFactory } from '@nestjs/core';
import { 
  Injectable, Controller, Module,
  Body, Param,
  Get, Post, Patch, Delete,
} from '@nestjs/common';

import { AppModule } from './app.module';
import { ProductsModule } from './products/products.module';

import { ProductInt } from './products/interfaces/product.interface';
import { CreateProductDto } from './products/dto/create-product.dto';
import { UpdateProductDto } from './products/dto/update-product.dto';

import { ProductsService } from './products/products.service';
import { ProductsController } from './products/products.controller';

export {
  NestFactory,
  Injectable, Controller, Module,
  Body, Param,
  Get, Post, Patch, Delete,
  AppModule, ProductsModule,
  ProductInt, CreateProductDto, UpdateProductDto,
  ProductsService, ProductsController,
};
