import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ControlService} from '../control.service';

declare const $: any;
@Component({
  selector: 'app-serve',
  templateUrl: './serve.component.html',
  styleUrls: ['./serve.component.css']
})
export class ServeComponent implements OnInit , AfterViewInit {

  constructor(private control: ControlService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (this.control.route_control == 7 ) {
      $('html, body').animate({
        scrollTop: $('#archor7').offset().top - 100
      }, 0);
      this.control.route_control = 0;
    }
    if (this.control.route_control == 8 ) {
      $('html, body').animate({
        scrollTop: $('#archor8').offset().top - 100
      }, 0);
      this.control.route_control = 0;
    }

    if (this.control.route_control == 9 ) {
      $('html, body').animate({
        scrollTop: $('#archor9').offset().top - 100
      }, 0);
      this.control.route_control = 0;
    }

  }

}
