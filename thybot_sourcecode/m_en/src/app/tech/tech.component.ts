import {AfterViewInit, Component, OnInit} from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // this.set_canvas();
  }


}
