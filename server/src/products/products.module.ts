import {
  Module,
  ProductsController, ProductsService,
} from '../imports';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
