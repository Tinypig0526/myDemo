import { Component, OnInit } from '@angular/core';

declare const Swiper: any;
declare const echarts: any;
@Component({
  selector: 'app-chart4',
  templateUrl: './chart4.component.html',
  styleUrls: ['./chart4.component.css']
})
export class Chart4Component implements OnInit {

  map_chart: any;
  kiosk_chart: any;

  swiper4: any;

  on_off_1 = true;
  on_off_2 = true;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.set_swiper(this);
    }  , 30000);
  }

  set_swiper(fn_this) {
    this.swiper4 = new Swiper('.swiper-container4', {
      autoplay:{
        delay: 40000,
        disableOnInteraction: false,
      },
      effect: 'flip',
      on: {
        slideChangeTransitionEnd: function () {
          // console.log(this.activeIndex);
          switch (this.activeIndex) {
            case 0: if (fn_this.map_chart) {fn_this.map_chart.clear(); } fn_this.set_map(); break;
            case 1: if (fn_this.kiosk_chart) {fn_this.kiosk_chart.clear(); }  fn_this.set_kiosk(); break;
          }
        },
      }
    });
    this.set_map();
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
      this.swiper4.autoplay.start()
    } else {
      this.swiper4.autoplay.stop();
    }
  }



  set_map() {

    this.map_chart = echarts.init(document.getElementById('map'));

    let data = [
      {name: '上海', value: 658},
      {name: '深圳', value: 582},
      {name: '珠海', value: 822},
      {name: '杭州', value: 684},
      {name: '北京', value: 779},
      {name: '广州', value: 738},
      {name: '攀枝花', value: 251},
      {name: '威海', value: 182},
      {name: '承德', value: 183},
      {name: '厦门', value: 181},
      {name: '汕尾', value: 192},
      {name: '潮州', value: 193},
      {name: '丹东', value: 199},
      {name: '太仓', value: 272},
      {name: '曲靖', value: 273},
      {name: '烟台', value: 281},
      {name: '福州', value: 292},
      {name: '瓦房店', value: 203},
      {name: '即墨', value: 201},
      {name: '抚顺', value: 212},
      {name: '玉溪', value: 213},
      {name: '张家口', value: 211},
      {name: '阳泉', value: 312},
      {name: '莱州', value: 323},
      {name: '湖州', value: 324},
      {name: '汕头', value: 325},
      {name: '昆山', value: 331},
      {name: '宁波', value: 332},
      {name: '湛江', value: 333},
      {name: '揭阳', value: 341},
      {name: '荣成', value: 342},
      {name: '连云港', value: 451},
      {name: '葫芦岛', value: 452},
      {name: '常熟', value: 463},
      {name: '东莞', value: 464},
      {name: '河源', value: 465},
      {name: '淮安', value: 466},
      {name: '泰州', value: 467},
      {name: '南宁', value: 471},
      {name: '营口', value: 572},
      {name: '惠州', value: 573},
      {name: '江阴', value: 574},
      {name: '蓬莱', value: 575},
      {name: '韶关', value: 541},
      {name: '嘉峪关', value: 542},
    ];
    let geoCoordMap = {
      '上海':[121.48,31.22],
      '广州':[113.23,23.16],
      '深圳':[114.07,22.62],
      '珠海':[113.52,22.3],
      '北京':[116.46,39.92],
      '杭州':[120.19,30.26],
      '攀枝花':[101.718637,26.582347],
      '威海':[122.1,37.5],
      '承德':[117.93,40.97],
      '厦门':[118.1,24.46],
      '汕尾':[115.375279,22.786211],
      '潮州':[116.63,23.68],
      '丹东':[124.37,40.13],
      '太仓':[121.1,31.45],
      '曲靖':[103.79,25.51],
      '烟台':[121.39,37.52],
      '福州':[119.3,26.08],
      '瓦房店':[121.979603,39.627114],
      '即墨':[120.45,36.38],
      '抚顺':[123.97,41.97],
      '玉溪':[102.52,24.35],
      '张家口':[114.87,40.82],
      '阳泉':[113.57,37.85],
      '莱州':[119.942327,37.177017],
      '湖州':[120.1,30.86],
      '汕头':[116.69,23.39],
      '昆山':[120.95,31.39],
      '宁波':[121.56,29.86],
      '湛江':[110.359377,21.270708],
      '揭阳':[116.35,23.55],
      '荣成':[122.41,37.16],
      '连云港':[119.16,34.59],
      '葫芦岛':[120.836932,40.711052],
      '常熟':[120.74,31.64],
      '东莞':[113.75,23.04],
      '河源':[114.68,23.73],
      '淮安':[119.15,33.5],
      '泰州':[119.9,32.49],
      '南宁':[108.33,22.84],
      '营口':[122.18,40.65],
      '惠州':[114.4,23.09],
      '江阴':[120.26,31.91],
      '蓬莱':[120.75,37.8],
      '韶关':[113.62,24.84],
      '嘉峪关':[98.289152,39.77313],
    };

    let convertData = function (data) {
      let res = [];
      for (let i = 0; i < data.length; i++) {
        let geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value)
          });
        }
      }
      return res;
    };

    let option = {
      backgroundColor: '#fff',
      tooltip : {
        trigger: 'item',
        formatter: function(data){
          return  '\n' + data.name + ':' + data.value[2] + '台';
        },
        /*   // formatter: `{a} <br/>{b}: {c}台 <br/> <br/>销售额: ${data}元`,*/
      },
      legend: {
        orient: 'vertical',
        y: 'bottom',
        x:'right',
        data:['pm2.5'],
        textStyle: {
          color: '#fff'
        }
      },
      geo: {
        map: 'china',
        zoom: 1.5,
        label: {
          emphasis: {
            show: false
          }
        },
        roam: true,
        itemStyle: {
          normal: {
            areaColor: '#A2DCD4',
            borderColor: '#111'
          },
          emphasis: {
            areaColor: '#36c6d3'
          }
        }
      },
      series : [
        {
          name: '该地区售货机分布',
          type: 'scatter',
          coordinateSystem: 'geo',
          data: convertData(data),
          symbolSize: function (val) {
            return val[2] / 30;
          },
          label: {
            normal: {
              formatter: '{b}',
              position: 'right',
              show: false
            },
            emphasis: {
              show: true
            }
          },
          itemStyle: {
            normal: {
              color: '#2D3E5E'
            }
          }
        },
        {
          name: '该地区售货机分布',
          type: 'effectScatter',
          coordinateSystem: 'geo',
          data: convertData(data.sort(function (a, b) {
            return b.value - a.value;
          }).slice(0, 6)),
          symbolSize: function (val) {
            return val[2] / 30;
          },
          showEffectOn: 'render',
          rippleEffect: {
            brushType: 'stroke'
          },
          hoverAnimation: true,
          label: {
            normal: {
              formatter: '{b}',
              position: 'right',
              show: true
            }
          },
          itemStyle: {
            normal: {
              color: '#D8617A',
              shadowBlur: 10,
              shadowColor: '#333'
            }
          },
          zlevel: 1
        }
      ]
    };

    this.map_chart.setOption(option, true);
  }

  set_kiosk(){
    this.kiosk_chart = echarts.init(document.getElementById('kiosk'));

    let option = {
      backgroundColor: "#ffffff",
      color: ["#37A2DA"],
      radar: {
        shape: 'circle',
        name: {
          textStyle: {
            color: '#999999',
          }
        },
        splitArea: {
          areaStyle: {
            color: ['#fff', '#fff', '#fff', '#fff'],
            shadowColor: '#37A2DA'
          }
        },
        indicator: [{
          name: '价格',
          max: 6500
        },
          {
            name: '出货速度',
            max: 19000
          },
          {
            name: '性能',
            max: 30000
          },
          {
            name: '外观',
            max: 38000
          },
          {
            name: '用户体验',
            max: 52000
          },
          {
            name: '稳定性',
            max: 25000
          }
        ]
      },
      series: [{
        type: 'radar',
        animationDuration: 5000,
        data: [{
          value: [5000, 4000, 28000, 31000, 42000, 21000],
          name: '数据',
          itemStyle: {
            normal: {
              color: 'rgba(5, 128, 242, 0.8)'
            }
          },
          areaStyle: {
            normal: {
              color: '#37A2DA'
            }
          }
        }]
      }]
    };

    this.kiosk_chart.setOption(option, true);
  }

}
