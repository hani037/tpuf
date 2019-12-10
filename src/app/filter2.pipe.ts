import { Pipe, PipeTransform } from '@angular/core';
import {UserModel} from './user.model';

@Pipe({
  name: 'filter2'
})
export class Filter2Pipe implements PipeTransform {

  transform(items: UserModel[]): any {
    return items.filter(item => item.role !== 'root' );
  }

}
