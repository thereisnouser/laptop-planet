import { NestFactory } from '@nestjs/core';
import { 
  Injectable, Controller, Module,
  Body, Param,
  Get, Post, Patch, Delete,
} from '@nestjs/common';

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
  ProductInt, CreateProductDto, UpdateProductDto,
  ProductsService, ProductsController,
};
