import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ControlService} from '../control.service';


declare const $: any;
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, AfterViewInit {


  is_show = [false, false, false,
    false, false, false,
    false, false, false,
    false, false, false];

  constructor(private control: ControlService) { }

  ngOnInit() {
  }
  ngAfterViewInit() {

    $('.bg_w').height($('.bg_1').width);
    $('.bg_1').height($('.bg_1').width);
    $('.bg_g').height($('.bg_1').width);
    $('.bg_2').height($('.bg_1').width);

    if (this.control.route_control == 1 ) {
      $('html, body').animate({
        scrollTop: $('#archor1').offset().top - 100
      }, 0);
      this.control.route_control = 0;
    }
    if (this.control.route_control == 2 ) {
      $('html, body').animate({
        scrollTop: $('#archor2').offset().top - 100
      }, 0);
      this.control.route_control = 0;
    }

    if (this.control.route_control == 3 ) {
      $('html, body').animate({
        scrollTop: $('#archor3').offset().top - 100
      }, 0);
      this.control.route_control = 0;
    }

  }

  show_name(index) {
    this.is_show[index] = true;

  }

  hide_name(index) {
    this.is_show[index] = false;

  }
}
