import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  @Input() set getShowType(arg: any) {
    console.log('arg: ' + arg);
    if (arg === 'A') {
      console.log('사용자 목록에 나와주세요');
    } else {
      console.log('게시글 목록에 나와주세요');
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
