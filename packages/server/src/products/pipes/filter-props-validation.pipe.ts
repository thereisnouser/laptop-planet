import { Injectable, PipeTransform } from '@nestjs/common';
import { Schema } from 'joi';

import { FilterProductsListDto } from 'src/products/dto/filter-products-list.dto';
import { IValidatedFilteringProps } from 'src/products/interfaces/validatedFilteringProps.interface';

@Injectable()
export class FilterPropsValidationPipe implements PipeTransform {
  constructor(private schema: Schema) {}

  private readonly orderParams = ['price', 'rating'];

  transform(props: FilterProductsListDto): IValidatedFilteringProps {
    const validatedProps = this.schema.validate(props).value;

    const [queryOrderParam, queryOrderMethod] = validatedProps.orderBy.split(' ');
    const orderParam = this.getOrderParam(queryOrderParam);
    const orderMethod = this.getOrderMethod(queryOrderMethod);

    validatedProps.orderBy = [orderParam, orderMethod];

    return validatedProps;
  }

  getOrderParam(orderParam: string): string {
    const isOrderParamExist = this.orderParams.includes(orderParam);

    if (isOrderParamExist) {
      return orderParam;
    }

    return '';
  }

  getOrderMethod(orderMethod: string): 'ASC' | 'DESC' {
    if (orderMethod && orderMethod.toUpperCase() === 'DESC') {
      return 'DESC';
    }

    return 'ASC';
  }
}
