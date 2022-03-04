import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxText'
})
export class MaxTextPipe implements PipeTransform {

  transform(value: any, max: any): any {
    return value.length>max?value.substring(0,max)+'...':value;
  }

}
