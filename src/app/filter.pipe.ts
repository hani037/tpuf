import { Pipe, PipeTransform } from '@angular/core';
import {BookModel} from './book.model';

@Pipe({
  name: 'filter',
  pure: false
})

export class FilterPipe implements PipeTransform {
  transform(items: BookModel[], arg1: string, arg2: string): any {
    if (arg2 === 'option1') {
      return items.filter(item => item.name.toUpperCase().indexOf(arg1.toUpperCase()) !== -1);
    } else if (arg2 === 'option3') {
      return items.filter(item => item.genre.toUpperCase().indexOf(arg1.toUpperCase()) !== -1);
    } else {
      return items.filter(item => item.prix <= Number(arg1));
    }
  }
}
