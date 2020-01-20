import { Component, OnInit } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  // 해당 컴포넌트에서 발생한 이벤트(데이터)를 외부 컴포넌트로 전달시 사용 => output
  @Output() sendToEvent = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    // 컴포넌트가 동작하는 준비과정이 끝난상태를 의미
    // html, css 파일의 준비과정이 끝난상태를 의미
  }

  dataType(type: any): void {
    console.log(type);
    this.sendToEvent.emit(type);
  }
}
