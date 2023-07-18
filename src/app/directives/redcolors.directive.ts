import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';
@Directive({
  selector: '[appRedcolors]'
})
export class RedcolorsDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.color="red";
   }

}
