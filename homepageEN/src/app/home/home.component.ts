import {AfterViewInit, Component, OnInit} from '@angular/core';


declare const $: any;
declare const Swiper: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {


  swiper: any;

  play = 1;

  img_path = ['./assets/img/home/s01.jpg',
    './assets/img/home/s02.jpg',
    './assets/img/home/s03.jpg',
    './assets/img/home/s04.jpg',
    './assets/img/home/s05.jpg',
    './assets/img/home/s06.jpg',
    './assets/img/home/s07.jpg',
    './assets/img/home/s08.jpg',
    './assets/img/home/s09.jpg',
    './assets/img/home/s10.jpg',
    './assets/img/home/s11.jpg',
    './assets/img/home/s12.jpg',
    './assets/img/home/s13.jpg',
    './assets/img/home/s14.jpg',
    './assets/img/home/s15.jpg',
    './assets/img/home/s16.jpg',
    './assets/img/home/s17.jpg',
    './assets/img/home/s18.jpg',
    './assets/img/home/s19.jpg',
    './assets/img/home/s20.jpg',
    './assets/img/home/s21.jpg',
    './assets/img/home/s22.jpg',
    './assets/img/home/s23.jpg',
    './assets/img/home/s24.jpg',
    './assets/img/home/s25.jpg',
    './assets/img/home/banner1.jpg',
  ];



  animate_img = this.img_path[0];
  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    if (this.play == 1) {
      this.play_animate();
    } else {
      this.set_swiper();
    }


  }


  play_animate() {

    let a = 1;
    let animate = setInterval(() => {
      if (a > 25) {
        this.play = 2;
        setTimeout(() => {
          this.play = 3;
          setTimeout(() => {
            this.set_swiper();
          }, 500);
        } , 1000);
        clearInterval(animate);

      } else {
        this.animate_img = this.img_path[a];
        a = a + 1;
      }
      }, 100);

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
  }

  change_swiper(index) {
    this.swiper.slideTo(index, 1000, false);
  }
}
