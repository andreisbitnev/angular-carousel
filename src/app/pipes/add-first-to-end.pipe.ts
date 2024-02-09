import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addFirstToEnd',
  standalone: true
})
@Injectable()
export class AddFirstToEndPipe implements PipeTransform {

  transform<T>(value: T[]): T[] {
    if (!Array.isArray(value) || value.length === 0) {
      return value;
    }
    return [...value, value[0]];
  }

}
