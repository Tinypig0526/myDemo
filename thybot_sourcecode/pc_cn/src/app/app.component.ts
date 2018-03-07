import {Component, OnInit} from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  active = 1;
  show = 0;
  language = true;

  constructor() {

  }

  ngOnInit() {
  }

  // change_active(num) {
  //   this.active = num;
  // }

  change_show(num) {
    this.show = num;
  }


}
