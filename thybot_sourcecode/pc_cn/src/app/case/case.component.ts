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


  exhibition_data = [
    {title: 'NAMA ONESHOW', text: '世界规模最大的自动售货、咖啡服务和食品服务博览会', position: '美国自动售货展', img: './assets/img/case/meeting1.jpg'},
    {title: 'NAMA ONESHOW', text: '世界规模最大的自动售货、咖啡服务和食品服务博览会', position: '美国自动售货展', img: './assets/img/case/meeting2.jpg'},
    {title: '', text: '', position: '广州展会', img: './assets/img/case/meeting3.jpg'},
    {title: '', text: '', position: '上海展会', img: './assets/img/case/meeting4.jpg'},
    {title: '', text: '', position: '广州展会', img: './assets/img/case/meeting5.jpg'},
    {title: '', text: '', position: '北京展会', img: './assets/img/case/meeting6.jpg'},
  ];
  constructor() { }

  ngOnInit() {


  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.set_swiper();
    }, 300);
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
