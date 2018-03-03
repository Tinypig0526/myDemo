import {Component, OnInit} from '@angular/core';

declare const $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  active = 1;
  show = 0;
  language = false;

  ngOnInit() {
    switch (location.pathname) {
      case '/home': this.active = 1; break;
      case '/solution': this.active = 2; break;
      case '/product': this.active = 3; break;
      case '/case': this.active = 4; break;
      case '/serve': this.active = 5; break;
      case '/about': this.active = 6; break;
      case '/document': this.active = 7; break;
    }
  }

  change_active(num) {
    this.active = num;
  }

  change_show(num) {
    this.show = num;
  }

  change_language() {
    this.language = !this.language;
  }
}
