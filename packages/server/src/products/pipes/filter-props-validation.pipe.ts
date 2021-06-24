import { Injectable, PipeTransform } from '@nestjs/common';
import { Schema } from 'joi';

import { FilterProductsListDto } from 'src/products/dto/filter-products-list.dto';

@Injectable()
export class FilterPropsValidationPipe implements PipeTransform {
  constructor(private schema: Schema) {}

  transform(props: FilterProductsListDto) {
    const { value } = this.schema.validate(props);

    return value;
  }
}
