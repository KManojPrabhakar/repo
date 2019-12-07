import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {


  constructor() {
  }
  setListenForToasterMessage() {
  }

  showToaster(type, message) {
    const data = {
      type,
      message
    };
    // this.toasterSubject.next(data);
  }
}
