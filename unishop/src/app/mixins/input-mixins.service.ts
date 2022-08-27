import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputMixinsService {

  constructor() { }

  numberOnlyInput(evt: any, compare = 2): any {
    
    window.event
    // Prevent the user to type characters
    evt = (evt) ? evt : window.event;
    const charCode = (evt.which) ? evt.which : evt.keyCode;

    const val = evt.type === 'paste' ? evt.clipboardData.getData('text/plain') : evt.target.value;
    if ((charCode > 31 && (charCode < 48 || charCode > 57)) || charCode === 46 || charCode === 101 || val.length >= compare) {
      evt.preventDefault();
    } else {
      return true;
    }
  }
}
