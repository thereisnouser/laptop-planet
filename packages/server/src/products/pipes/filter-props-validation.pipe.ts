import { Injectable, PipeTransform } from '@nestjs/common';
import { Schema } from 'joi';

import { FilterProductsListDto } from 'src/products/dto/filter-products-list.dto';
import { IValidatedFilteringProps } from 'src/products/interfaces/validatedFilteringProps.interface';

@Injectable()
export class FilterPropsValidationPipe implements PipeTransform {
  constructor(private schema: Schema) {}

  transform(props: FilterProductsListDto): IValidatedFilteringProps {
    const validatedProps = this.schema.validate(props).value;

    const [queryOrderParam, queryOrderMethod] = validatedProps.orderBy;
    const orderMethod = this.getOrderMethod(queryOrderMethod);

    validatedProps.orderBy = [queryOrderParam, orderMethod];

    return validatedProps;
  }

  getOrderMethod(orderMethod: string): 'ASC' | 'DESC' {
    if (orderMethod && orderMethod.toUpperCase() === 'DESC') {
      return 'DESC';
    }

    return 'ASC';
  }
}
