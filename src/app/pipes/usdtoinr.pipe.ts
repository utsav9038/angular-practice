import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdtoinr'
})
export class UsdtoinrPipe implements PipeTransform {

  transform(value: string, ...args:number[]): number {
    const [x]=args;
    let val=parseInt(value);
    return val*x;
  }

}
