import {AfterViewInit, Component, OnInit} from '@angular/core';

declare const Swiper: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , AfterViewInit{

  swiper: any;
  open = false;
  constructor() { }

  ngOnInit() {
    this.set_swiper();
    setTimeout(() => {
      this.open = true;
    }, 200)
  }

  ngAfterViewInit() {


  }

  set_swiper() {
    this.swiper = new Swiper('.swiper-container', {
      autoplay: {
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
      },
      effect: 'fade',
    });
    this.open = true;
  }

  change_swiper(index) {
    this.swiper.slideTo(index, 1000, false);
  }

}
