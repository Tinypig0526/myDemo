import {AfterViewInit, Component, OnInit} from '@angular/core';


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

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    $('.bg_w').height($('.bg_1').width);
    $('.bg_1').height($('.bg_1').width);
    $('.bg_g').height($('.bg_1').width);
    $('.bg_2').height($('.bg_1').width);

  }

  show_name(index) {
    this.is_show[index] = true;
    // console.log(this.is_show);
  }

  hide_name(index) {
    this.is_show[index] = false;
    // console.log(this.is_show);
  }
}
