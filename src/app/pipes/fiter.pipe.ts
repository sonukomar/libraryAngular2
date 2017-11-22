import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filterBook'})

export class FilterBookPipe implements PipeTransform {
  transform(item: any[], filter: Object): any {
    if (!item || !filter) {
      return item;
    }
    console.log(filter);
    console.log(item);
    return item.filter(item => item.name.indexOf(filter['name']) !== -1);
  }
}
