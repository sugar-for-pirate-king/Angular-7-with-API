import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class ServicePipe implements PipeTransform {

  transform(value: string): string {
    return 'Rp. ' + value;
  }

}
