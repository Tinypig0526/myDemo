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

  ngOnInit() {

  }

  change_active(num) {
    this.active = num;
  }

  change_show(num) {
    console.log(num);
    this.show = num;
  }

}
