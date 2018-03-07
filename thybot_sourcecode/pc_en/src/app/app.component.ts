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

  constructor() {

  }

  ngOnInit() {
  }



  change_show(num) {
    this.show = num;
  }


}
