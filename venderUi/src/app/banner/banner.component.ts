import { Component, OnInit } from '@angular/core';

declare const Swiper: any;
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  swiper: any;
  constructor() { }

  ngOnInit() {
    this.setSwiper()
  }

  setSwiper() {
    this.swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 0,
      centeredSlides: false,
      autoplay: 3000,
      autoplayDisableOnInteraction: false
    });
  }
}
