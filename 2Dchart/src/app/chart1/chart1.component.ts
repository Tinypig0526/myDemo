import { Component, OnInit } from '@angular/core';

declare const Swiper: any;
declare const echarts: any;
@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.css']
})
export class Chart1Component implements OnInit {

  stay_time_chart: any;
  click_and_sale_chart: any;
  swiper1: any;

  on_off_1 = true;
  on_off_2 = true;


  constructor() { }

  ngOnInit() {
    this.set_swiper(this);
  }

  move_on_off(n) {
    if (n == 1) {
      this.on_off_1 = !this.on_off_1;
    } else {
      this.on_off_2 = !this.on_off_2;
    }

    if (this.on_off_1 && this.on_off_2) {
      // this.swiper1.slideNext();
      // this.swiper1.autoplay.delay = 40000;
      this.swiper1.autoplay.start()
    } else {
      this.swiper1.autoplay.stop();
    }
  }

  set_swiper(fn_this) {
    this.swiper1 = new Swiper('.swiper-container1', {
      autoplay: {
        delay: 40000,
        disableOnInteraction: false,
      },
      effect: 'flip',
      on: {
        slideChangeTransitionEnd: function () {
          // console.log(this.activeIndex);
          switch (this.activeIndex) {
            case 0: if (fn_this.stay_time_chart) {fn_this.stay_time_chart.clear(); } fn_this.stay_time(); break;
            case 1: if (fn_this.click_and_sale_chart) {fn_this.click_and_sale_chart.clear(); }  fn_this.click_and_sale(); break;
          }
        },
      }
    });
    this.stay_time();
  }



  stay_time(){


    this.stay_time_chart = echarts.init(document.getElementById('stay_time'));
    let option = {
     /* backgroundColor: '#fff',*/
      color:['#36c6d3', '#659be0', '#ed6b75'],
      title: [{
        text: '88.2',
        left: '46%',
        top: '48%',
        textAlign: 'center',
        textBaseline: 'middle',
        textStyle: {
          color: '#666',
          fontWeight: 'normal',
          fontSize: 40
        },
      },
        {
          text: '小时',
          left: '54%',
          top: '48%',
          textAlign: 'center',
          textBaseline: 'middle',
          textStyle: {
            color: '#999',
            fontWeight: 'normal',
            fontSize: 20
          }
        }
      ],
      formatter: "88.2小时",
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
        x: 'center',
        orient: 'vertical',
        bottom: 20,
        formatter: function (a,b,c) {
          return a; /*' ' + a + '总时长' + c +'小时';*/
        },
        /*data:['栏目1', '栏目2', '栏目3'],*/
      },
      series: [
        {
          name:'访问总时长',
          type:'pie',
          radius: ['40%', '55%'],
          selectedOffset: 30,
          data:[
            {value: 21.9, name: '观点'},
            {value: 38.2, name: '要闻', selected: true},
            {value: 28.1, name: '时政'},
          ],
          animationDuration: 5000,
        }
      ]
    };
    this.stay_time_chart.setOption(option);
  }


  click_and_sale(){
    this.click_and_sale_chart = echarts.init(document.getElementById('click_and_sale'));

    let option = {
      tooltip: {
        trigger: 'axis',
      },
      grid: {
        containLabel: true
      },
    /*  legend: {
        data: ['订单量', '访问量']
      },*/
      xAxis: [{
        type: 'category',
        axisTick: {
          alignWithLabel: true
        },
        data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
      }],
      yAxis: [{
        type: 'value',
        name: '订单量',
        min: 0,
        position: 'left',
        axisLabel: {
          formatter: '{value} 万件'
        }
      }, {
        type: 'value',
        name: '访问量',
        min: 0,
        position: 'right',
        axisLabel: {
          formatter: '{value} 万次'
        }
      }],
      series: [{
        name: '订单量',
        type: 'line',
        symbolSize: 10,
        label: {
          normal: {
            show: true,
            position: 'top',
          }
        },
        itemStyle:{
          normal: {
            show: true,
            color: '#ebc272',
          }
        },
        lineStyle: {
          normal: {
            width: 4,
          }
        },
        animationDuration: 5000,
        data: [1, 13, 37, 35, 15, 13, 25, 21, 6, 45, 32, 18]
      }, {
        name: '访问量',
        type: 'bar',
        yAxisIndex: 1,
        itemStyle:{
          normal: {
            show: true,
            color: '#36c6d3',
          }
        },
        label: {
          normal: {
            show: true,
            position: 'top'
          }
        },
        barGap: '0%',
        barCategoryGap: '40%',
        animationDuration: 5000,
        data: [201, 222, 223, 777, 244, 255, 555, 879, 938, 1364, 1806, 2124]
      }]
    };

    this.click_and_sale_chart.setOption(option);
  }



}
