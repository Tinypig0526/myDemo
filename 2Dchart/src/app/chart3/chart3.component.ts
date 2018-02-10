import { Component, OnInit } from '@angular/core';

declare const Swiper: any;
declare const echarts: any;
declare const $: any;
@Component({
  selector: 'app-chart3',
  templateUrl: './chart3.component.html',
  styleUrls: ['./chart3.component.css']
})
export class Chart3Component implements OnInit {
  content_rank_chart: any;
  sale_now_chart: any;

  sale_order = 16207;
  sale_amount = 297106;


  swiper3: any;

  on_off_1 = true;
  on_off_2 = true;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.set_swiper(this);
    }  , 20000);
  }

  set_swiper(fn_this) {
    this.swiper3 = new Swiper('.swiper-container3', {
      autoplay:{
        delay: 40000,
        disableOnInteraction: false,
      },
      effect: 'flip',
      on: {
        slideChangeTransitionEnd: function () {
          // console.log(this.activeIndex);
          switch (this.activeIndex) {
            case 0: if (fn_this.content_rank_chart) {fn_this.content_rank_chart.clear(); } fn_this.content_rank(); break;
            case 1: if (fn_this.sale_now_chart) {fn_this.sale_now_chart.clear(); }  fn_this.sale_now(); break;
          }
        },
      }
    });
    this.content_rank();
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
      this.swiper3.autoplay.start()
    } else {
      this.swiper3.autoplay.stop();
    }
  }

  content_rank() {
    this.content_rank_chart = echarts.init(document.getElementById('content_rank'));

    let option = {
     /* title:{
        text: '今日各栏目点击量',
        textStyle: {
          fontWeight: 'normal',
          fontSize: 20,
        },
        left: '6%',
        top: '3%'
      },*/
      /*backgroundColor: '#fff',*/
      legend: {
        bottom: 20,
        textStyle:{
        },
        data: ['栏目名称']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
      },
      xAxis:  {
        type: 'value',
        position:'top',
        /* name: '件',*/
        axisTick : {show: false},
        axisLine: {
          show: true,
          lineStyle:{
          }
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
            show: true,
            lineStyle:{
            }
          },
          data: ['观点', '要闻', '时政', '法治', '国际', '军事', '港澳台', '文化', '体育']
        }
      ],
      series: [
        {
          name: '栏目名称',
          type: 'bar',
          animationDuration: 5000,
          itemStyle:{
            normal: {
              show: true,
              color: '#659be0',
              barBorderRadius: 15,
              borderWidth: 0,
              borderColor:'#333',
              hoverAnimation: false,
              label: {
                show: true,
                position: 'right',
                formatter: '{c}次',
                color: '#333333',
              },
            }
          },

          barGap:'0%',
          barCategoryGap:'80%',
          data: [530, 234, 148, 169, 280, 492, 200, 383, 547]
        }
      ]
    };

    this.content_rank_chart.setOption(option);
  }

  sale_now(){
    this.sale_now_chart = echarts.init(document.getElementById('sale_now'));

    let option = {
      backgroundColor: 'rgba(255,255,255,0)',
      tooltip : {
        formatter: "{a} <br/>{c} {b}"
      },
      series : [
        {
          name: '今日销售额',
          type: 'gauge',
          z: 3,
          min: 0,
          max: 1000000,
          splitNumber: 10,
          radius: '70%',
          axisLine: {            // 坐标轴线
            lineStyle: {       // 属性lineStyle控制线条样式
              width: 10
            }
          },
          axisTick: {            // 坐标轴小标记
            length: 15,        // 属性length控制线长
            lineStyle: {       // 属性lineStyle控制线条样式
              color: 'auto'
            }
          },
          splitLine: {           // 分隔线
            length: 20,         // 属性length控制线长
            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
              color: 'auto'
            }
          },
          title : {
            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
              fontWeight: 'bolder',
              fontSize: 20,
              fontStyle: 'italic'
            }
          },
          detail : {
            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
              fontWeight: 'bolder'
            }
          },
          data:[{value: this.sale_amount, name: '今日销售额(元)'}],
          animationDuration: 5000,
        },
        {
          name: '今日订单量',
          type: 'gauge',
          center: ['22%', '55%'],    // 默认全局居中
          radius: '55%',
          min: 0,
          max: 40000,
          endAngle:45,
          splitNumber:8,
          axisLine: {            // 坐标轴线
            lineStyle: {       // 属性lineStyle控制线条样式
              width: 8
            }
          },
          axisTick: {            // 坐标轴小标记
            length:12,        // 属性length控制线长
            lineStyle: {       // 属性lineStyle控制线条样式
              color: 'auto'
            }
          },
          splitLine: {           // 分隔线
            length:20,         // 属性length控制线长
            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
              color: 'auto'
            }
          },
          pointer: {
            width:5
          },
          title: {
            offsetCenter: [0, '-30%'],       // x, y，单位px
          },
          detail: {
            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
              fontWeight: 'bolder'
            }
          },
          data:[{value: this.sale_order, name: '今日订单量(笔)'}],
          animationDuration: 5000,
        },
        {
          name: '运营中设备数量',
          type: 'gauge',
          center: ['79%', '55%'],    // 默认全局居中
          radius: '55%',
          min:0,
          max:8000,
          startAngle:140,
          endAngle:-45,
          splitNumber:8,
          axisLine: {            // 坐标轴线
            lineStyle: {       // 属性lineStyle控制线条样式
              width: 8
            }
          },
          axisTick: {            // 坐标轴小标记
            length:12,        // 属性length控制线长
            lineStyle: {       // 属性lineStyle控制线条样式
              color: 'auto'
            }
          },
          splitLine: {           // 分隔线
            length:20,         // 属性length控制线长
            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
              color: 'auto'
            }
          },
          pointer: {
            width:5
          },
          title: {
            offsetCenter: [0, '-30%'],       // x, y，单位px
          },
          detail: {
            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
              fontWeight: 'bolder'
            }
          },
          data:[{value: 2583, name: '在线设备数量(台)'}],
          animationDuration: 5000,
        }
      ]
    };

    setInterval(() => {
      if (Math.random() < 0.3) {
        this.sale_order ++;
        this.sale_amount = this.sale_amount + 3 + Math.floor( Math.random() * 5 );  /* (this.sale_amount + Math.random() * 0.01).toFixed(4);*/  /*parseFloat(this.sale_amount + (Math.random() * 0.01).toFixed(4));*/
        option.series[0].data[0].value = this.sale_amount;
        option.series[1].data[0].value = this.sale_order;
        // console.log(option.series[1].data[0].value);
        this.sale_now_chart.setOption(option);
      }
    }, 3000);
  /*  setInterval(function (){
      option.series[0].data[0].value = (Math.random()*100).toFixed(2) - 0;
      option.series[1].data[0].value = (Math.random()*7).toFixed(2) - 0;
      option.series[2].data[0].value = (Math.random()*2).toFixed(2) - 0;

    },2000);*/

    this.sale_now_chart.setOption(option);
  }

}
