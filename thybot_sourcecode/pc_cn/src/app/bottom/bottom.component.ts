import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router} from '@angular/router';
import {ControlService} from '../control.service';


declare const $: any;
@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.css']
})
export class BottomComponent implements OnInit {

  constructor(private router: Router, private control: ControlService, private ref: ChangeDetectorRef) { }

  ngOnInit() {
  }

  route(where) {


    switch (where) {
      case 1: this.router.navigate(['/product']); this.control.route_control = 1; $('html, body').animate({
        scrollTop: $('#archor1').offset().top - 100
      }, 0); break;
      case 2: this.router.navigate(['/product']); this.control.route_control = 2; $('html, body').animate({
        scrollTop: $('#archor2').offset().top - 100
      }, 0); break;
      case 3: this.router.navigate(['/product']); this.control.route_control = 3; $('html, body').animate({
        scrollTop: $('#archor3').offset().top - 100
      }, 0); break;
      case 4: this.router.navigate(['/solution']); this.control.tab_num = 2;  scrollTo(0, 120); break;
      case 5: this.router.navigate(['/solution']); this.control.tab_num = 1;  scrollTo(0, 120); break;
      case 6: this.router.navigate(['/solution']); this.control.tab_num = 3;  scrollTo(0, 120); break;
      case 7: this.router.navigate(['/serve']); this.control.route_control = 7; $('html, body').animate({
        scrollTop: $('#archor7').offset().top - 100
      }, 0); break;
      case 8: this.router.navigate(['/serve']); this.control.route_control = 8; $('html, body').animate({
        scrollTop: $('#archor8').offset().top - 100
      }, 0); break;
      case 9: this.router.navigate(['/serve']); this.control.route_control = 9;$('html, body').animate({
          scrollTop: $('#archor9').offset().top - 100
        }, 0); break;

    }
  }

}
