import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yearSpan'
})
export class YearSpanPipe implements PipeTransform {
  transform(yearMin: number, yearMax: number): string {
    if  (yearMax === 9999) {
      yearMax = new Date().getFullYear();
    }
    if (yearMin === yearMax) {
      return String(yearMin);
    }
    else {
      return `${yearMin} - ${yearMax}`;
    }
  }
}
