export class myclass {
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
