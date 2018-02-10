import {AfterViewInit, Component, OnInit} from '@angular/core';

declare const Swiper: any;
declare const echarts: any;
@Component({
  selector: 'app-chart2',
  templateUrl: './chart2.component.html',
  styleUrls: ['./chart2.component.css']
})
export class Chart2Component implements OnInit , AfterViewInit{


  content_trend_chart: any;

  sale_rank_chart: any;

  swiper2: any;

  on_off_1 = true;
  on_off_2 = true;
  constructor() { }

  ngOnInit() {
   setTimeout(() => {
     this.set_swiper(this);
   }  , 10000);
  }

  ngAfterViewInit() {

  }


  set_swiper(fn_this) {

    this.swiper2 = new Swiper('.swiper-container2', {
      autoplay: {
        delay: 40000,
        disableOnInteraction: false,
      },
      effect: 'flip',
      on: {
        slideChangeTransitionEnd: function () {
          /*console.log(this.activeIndex);*/
          switch (this.activeIndex) {
            case 0: if (fn_this.content_trend_chart) {fn_this.content_trend_chart.clear(); } fn_this.content_trend(); break;
            case 1: if (fn_this.sale_rank_chart) {fn_this.sale_rank_chart.clear(); }  fn_this.sale_rank(); break;
          }
        },
      }
    });
    this.content_trend();
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
      this.swiper2.autoplay.start()
    } else {
      this.swiper2.autoplay.stop();
    }
  }


  content_trend() {


    this.content_trend_chart = echarts.init(document.getElementById('content_trend'), null , {renderer: 'svg'});

    let option = {
      /*backgroundColor: '#fff',*/
     /* title: {
        text: '栏目点击量走势',
        textStyle: {
          fontWeight: 'normal',
          fontSize: 20,
        },
        left: '6%',
        top: '2%',
      },*/
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          lineStyle: {
            color: '#57617B'
          }
        }
      },
      legend: {
        icon: 'rect',
        itemWidth: 14,
        itemHeight: 5,
        itemGap: 13,
        data: ['观点', '要闻', '时政', '法治', '国际', '军事'],
        right: '4%',
        top: '2%',
        textStyle: {
          fontSize: 12,
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: {
          lineStyle: {
            color: '#57617B'
          }
        },
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
      }],
      yAxis: [{
        type: 'value',
        name: '万次',
        axisTick: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: '#57617B'
          }
        },
        axisLabel: {
          margin: 10,
          textStyle: {
            fontSize: 14
          }
        },
        splitLine: {
          lineStyle: {
            color: '#57617B'
          }
        }
      }],
      series: [{
        name: '观点',
        type: 'line',
        smooth: true,
        lineStyle: {
          normal: {
            width: 2,
          }
        },
        itemStyle: {
          normal: {
            color: '#659BE0'
          }
        },
        animationDuration: 1000,
        symbolSize: 18,
        data: [59.5,115,97.5,95.6,98.1,94.8,89.6,94.1,80.1,52.4,75.8,94.7]
      }, {
        name: '要闻',
        type: 'line',
        smooth: true,
        lineStyle: {
          normal: {
            width: 2
          }
        },
        itemStyle: {
          normal: {
            color: '#EBC272'
          }
        },
        animationDuration: 2000,
        symbolSize: 18,
        data: [97.3,99.2,99.3,100.0,99.6,90.6,80.0,91.5,69.8,67.5,90.4,84.9]
      }, {
        name: '时政',
        type: 'line',
        smooth: true,
        lineStyle: {
          normal: {
            width: 2
          }
        },
        itemStyle: {
          normal: {
            color: '#36C6D3'
          }
        },
        animationDuration: 3000,
        symbolSize: 18,
        data: [84.2,81.0,67.5,72.1,43.7,88.5,91.9,101.8,79.7,87.6,92.9,76]
      },{
        name: '法治',
        type: 'line',
        smooth: true,
        lineStyle: {
          normal: {
            width: 2
          }
        },
        itemStyle: {
          normal: {
            color: '#ED6B75'
          }
        },
        animationDuration: 4000,
        symbolSize: 18,
        data: [23,46,23,53,42,26,10,17,6,1,0,0]
      }, {
        name: '国际',
        type: 'line',
        smooth: true,
        lineStyle: {
          normal: {
            width: 2
          }
        },
        itemStyle: {
          normal: {
            color: '#A2DCD4'
          }
        },
        animationDuration: 5000,
        symbolSize: 18,
        data: [7,5,9,30,46,119,80.0,36,20,21,49,52]
      },
        {
          name: '军事',
          type: 'line',
          smooth: true,
          lineStyle: {
            normal: {
              width: 2
            }
          },
          itemStyle: {
            normal: {
              color: '#212D41'
            }
          },
          animationDuration: 6000,
          symbolSize: 18,
          data: [5,6,12,8,16.9,27.1,30.2,36.8,41.9,31,44.5,29]
        }
      ]
    };
    this.content_trend_chart.setOption(option);

  }




  sale_rank(){

    this.sale_rank_chart = echarts.init(document.getElementById('sale_rank'), null , {renderer: 'svg'});

    let option = {
      /*title:{
        text: '今日商品销售Top5',
        textStyle: {
          fontWeight: 'normal',
          fontSize: 20,
        },
        x: 'center',
        top: '6%'
      },
      backgroundColor: '#fff',*/
      legend: {
        bottom: 20,
        textStyle:{
        },
        data: ['销售数量']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
      },
      xAxis:  {
        type: 'value',
        /* name: '件',*/
        axisTick : {show: false},
        axisLabel: {show:false},
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false
        },
      },
      yAxis: [
        {
          type: 'category',
          axisTick : {show: false},
          axisLine: {
            show: false,
            lineStyle:{
            }
          },
          data: ['椰汁', '王老吉', '花生牛奶', '可乐', '冰糖雪梨']
        },
        {
          type: 'category',
          axisLine: {show: false},
          axisTick: {show: false},
          axisLabel: {show: false},
          splitArea: {show: false},
          splitLine: {show: false},
          data: ['椰汁', '王老吉', '花生牛奶', '可乐', '冰糖雪梨']
        },

      ],
      series: [
        {
          name: '背景',
          type: 'bar',
          yAxisIndex:1,

          itemStyle:{
            normal: {
              show: true,
              color: '#eeeeee',
              barBorderRadius:0,
              hoverAnimation: false,
              borderWidth:0,
              borderColor:'#333',
            }
          },
          barGap:'0%',
          barCategoryGap:'80%',
          data: [250, 250, 250, 250, 250]

        },
        {
          name: '销售数量',
          type: 'bar',
          itemStyle:{
            normal: {
              show: true,
              color: '#36c6d3',
              barBorderRadius: 15,
              borderWidth: 0,
              borderColor:'#333',
              hoverAnimation: false,
              label: {
                show: true,
                position: 'right',
                formatter: '{c}件',
                color: '#333333',
              },
            }
          },

          barGap:'0%',
          barCategoryGap:'80%',
          animationDuration: 5000,
          data: [130, 132, 141, 157, 159]
        }
      ]
    };
    this.sale_rank_chart.setOption(option);
  }

}
