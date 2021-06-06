import { Pipe, PipeTransform } from '@angular/core';
import {ProductModel} from "../../../core/models/product/product.model";

@Pipe({
  name: 'groupOrder'
})
export class GroupPipe implements PipeTransform {

  transform(products: ProductModel[]): ProductModel[] {
    return Object.values(products.reduce((a: any, c: any) =>  {
      a[c.id] = {...c, total: a[c.id] && a[c.id].total ? a[c.id].total + 1 : 1 };
      return a;
    }, {}));
  }

}
