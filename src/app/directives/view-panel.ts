import { Directive } from '@angular/core';

@Directive({
  selector: '[appViewPanel]',
  host: {
    class : 'border rounded p-4 bg-white'
  }

})
export class ViewPanel {

  constructor() { }

}
