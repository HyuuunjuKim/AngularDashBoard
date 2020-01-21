import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { BodyComponent } from './body/body.component';
import {ShareService} from './share.service';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule
  ],
  // provider로 공급된 내용은 동일하게 생성자를 통해 받을 수 있다
  providers: [
    {provide: 'alias', useValue: 'ShareData'}, ShareService],
  bootstrap: [AppComponent] // 모듈이 동작할 때 가장 먼저 띄워주는 컴포
})
export class AppModule { }
