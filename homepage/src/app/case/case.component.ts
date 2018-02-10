import { Component, OnInit } from '@angular/core';


declare const Swiper: any;
@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css']
})
export class CaseComponent implements OnInit {


  swiper: any;
  is_color = [0, false, false, false, false, false, false, false, false, false, false, false, false, false];
  black = ['0',
    './assets/img/b1.png',
    './assets/img/b2.png',
    './assets/img/b3.png',
    './assets/img/b4.png',
    './assets/img/b5.png',
    './assets/img/b6.png',
    './assets/img/b7.png',
    './assets/img/b8.png',
    './assets/img/b9.png',
    './assets/img/b10.png',
    './assets/img/b11.png',
    './assets/img/b12.png',
    './assets/img/b13.png'];

  color = ['0',
    './assets/img/c1.png',
    './assets/img/c2.png',
    './assets/img/c3.png',
    './assets/img/c4.png',
    './assets/img/c5.png',
    './assets/img/c6.png',
    './assets/img/c7.png',
    './assets/img/c8.png',
    './assets/img/c9.png',
    './assets/img/c10.png',
    './assets/img/c11.png',
    './assets/img/c12.png',
    './assets/img/c13.png'];

  constructor() { }

  ngOnInit() {
    this.set_swiper();
  }

  change_color(index, iscolor) {
    this.is_color[index] = iscolor;
  }

  set_swiper() {
    this.swiper = new Swiper('.swiper-container', {
      autoplay: {
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
      },
      // effect: 'flip',
    });
  }

  swiper_next () {
    if (this.swiper.activeIndex < 5 ) {
      this.swiper.slideNext(1000, false);
    }
  }

  swiper_pre () {
    if (this.swiper.activeIndex > 0) {

      this.swiper.slidePrev(1000, false);
    }
  }


}
