import {
  Module, ProductsModule,
} from './imports';

@Module({
  imports: [ProductsModule],
})
export class AppModule {}
