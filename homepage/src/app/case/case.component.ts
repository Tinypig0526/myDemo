import {AfterViewInit, Component, OnInit} from '@angular/core';


declare const Swiper: any;
@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css']
})
export class CaseComponent implements OnInit, AfterViewInit {



  swiper: any;
  swiper1: any;
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


  exhibition_data = [
    {title: 'NAMA ONESHOW', text: '世界规模最大的自动售货、咖啡服务和食品服务博览会', position: '美国自动售货展', img: './assets/img/case/meeting1.png'},
    {title: 'NAMA ONESHOW', text: '世界规模最大的自动售货、咖啡服务和食品服务博览会', position: '美国自动售货展', img: './assets/img/case/meeting2.png'},
    {title: '', text: '', position: '广州展会', img: './assets/img/case/meeting3.png'},
    {title: '', text: '', position: '上海展会', img: './assets/img/case/meeting4.png'},
    {title: '', text: '', position: '广州展会', img: './assets/img/case/meeting5.png'},
    {title: '', text: '', position: '北京展会', img: './assets/img/case/meeting6.png'},
  ];
  constructor() { }

  ngOnInit() {


  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.set_swiper();
    }, 100);
  }



  change_color(index, iscolor) {
    this.is_color[index] = iscolor;
  }

  set_swiper() {
    this.swiper1 = new Swiper('#swiper1', {
      autoplay: {
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
      },
      // direction : 'vertical',
      // effect: 'flip',
    });

    this.swiper = new Swiper('#swiper', {
      autoplay: {
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
      },
    });


  }

  swiper_next () {

    console.log(this.swiper.activeIndex);

    if (this.swiper.activeIndex < 5 ) {
      this.swiper1.slideNext(1000, false);
      this.swiper.slideNext(1000, false);
    }
  }

  swiper_pre () {

    console.log(this.swiper.activeIndex);
    if (this.swiper.activeIndex > 0) {

      this.swiper.slidePrev(1000, false);
      this.swiper1.slidePrev(1000, false);
    }
  }


}
