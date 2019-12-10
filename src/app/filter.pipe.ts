import { Pipe, PipeTransform } from '@angular/core';
import {BookModel} from './book.model';

@Pipe({
  name: 'filter',
  pure: false
})

export class FilterPipe implements PipeTransform {
  transform(items: BookModel[], arg1: string, arg2: string, arg3: string): any {
    if (arg2 === '') {
      items = items.filter(item => item.name.toUpperCase().indexOf(arg1.toUpperCase()) !== -1);
      items = items.filter(item => item.genre.toUpperCase().indexOf(arg3.toUpperCase()) !== -1);
      return items;
    } else {
      items = items.filter(item => item.name.toUpperCase().indexOf(arg1.toUpperCase()) !== -1);
      items = items.filter(item => item.genre.toUpperCase().indexOf(arg3.toUpperCase()) !== -1);
      items = items.filter(item => item.prix <= Number(arg2));
      return items;
    }
  }
}
