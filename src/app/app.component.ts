import { Component, Inject } from '@angular/core';
import {ShareService} from './share.service';
import {myclass} from './myclass';

import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard';
  cls: myclass;
  private HTTP: HttpClient;
  private showType: any;
  
  constructor(@Inject('alias') alias, private service: ShareService, http: HttpClient) {
    console.log(alias);
    service.justPrint();

    this.cls = new myclass();
    this.cls.justPrint();
    this.HTTP = http;
    this.setUserData();
    this.getUserData();
  }

  getUserData() {
    this.HTTP.get('/test/user/', {}).subscribe((res) => {
      console.log(res);
    });
  }
  setUserData() {
    this.HTTP.put('/test/user/', {id: 'admin', name: '관리자'}).subscribe((res) => {
      console.log(res);
    });
  }

  getEventFromHead(event) {
    console.log(event);
    this.showType = event;
  }
}
