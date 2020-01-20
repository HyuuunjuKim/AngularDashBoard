import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard';

  private showType: any;

  getEventFromHead(event) {
    console.log(event);
    this.showType = event;
  }
}
