import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  public shareValue: number = 1004;

  constructor() { }

  justPrint(arg?: any): void {
    if (arg) {
      console.log(arg);
    } else {
      console.log('arg is undefined');
    }
  }
}
