import { Component, Inject } from '@angular/core';
import {ShareService} from './share.service';
import {myclass} from './myclass';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard';
  cls: myclass;

  constructor(@Inject('alias') alias, private service: ShareService) {
    console.log(alias);
    service.justPrint();

    this.cls = new myclass();
    this.cls.justPrint();
  }
  private showType: any;

  getEventFromHead(event) {
    console.log(event);
    this.showType = event;
  }
}
