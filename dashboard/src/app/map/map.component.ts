import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FileService} from "../file.service";

declare const echarts:any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit {

  constructor() {
  }

  ngOnInit() {

  }
  ngAfterViewInit(){
    this.set_map();
    this.stay_time();
    this.sale_rank();
  }

  stay_time(){

    let myChart = echarts.init(document.getElementById('stay_time'));
    let option = {
      backgroundColor: '#fff',
      color:['#36c6d3', '#659be0', '#ed6b75'],
      title: [{
        text: '今日栏目访问时间Top3',
        textStyle: {
          fontWeight: 'normal',
          fontSize: 22,
        },
        x:'center',
        top: '10%'
      },{
        text: '88.2',
        left: '45%',
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
          left: '60%',
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
        /*
        x: 'left',*/
        orient: 'vertical',
        bottom: 20,
        formatter: function (a, b) {
          return a + '总时长' + '88.2' + '小时';
        },
        data:['栏目1','栏目2','栏目3'],
      },
      series: [

        {
          name:'访问总时长',
          type:'pie',
          radius: ['40%', '55%'],

          data:[
            {value:21.9, name:'栏目1',selected:true},
            {value:38.2, name:'栏目2'},
            {value:28.1, name:'栏目3'},
          ]
        }
      ]
    };
    myChart.setOption(option);
  }


  set_map() {

    let myChart = echarts.init(document.getElementById('map'));

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
      toolbox: {
        show: true,
        orient: 'vertical',
        x: 'right',
        y: 'center',
        feature: {
          dataView: {
            show: true,
            readOnly: false
          },
          restore: {
            show: true
          },
          saveAsImage: {
            show: true
          }
        }
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
            return val[2] / 20;
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
            return val[2] / 20;
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

    myChart.setOption(option, true);
  }



  sale_rank(){

    let myChart = echarts.init(document.getElementById('sale_rank'));

    let option = {
      title:{
        text: '今日商品销售Top5',
        textStyle: {
          fontWeight: 'normal',
          fontSize: 20,
        },
        x:'center',
        top: '6%'
      },
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
          data: ['product008','product022','product014','product002','product031']
        },
        {
          type: 'category',
          axisLine: {show:false},
          axisTick: {show:false},
          axisLabel: {show:false},
          splitArea: {show:false},
          splitLine: {show:false},
          data: ['product008','product022','product014','product002','product031']
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
              hoverAnimation: false,
              barBorderRadius:0,
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
          data: [130, 132, 141, 157, 159]
        }
      ]
    };
    myChart.setOption(option);
  }




}

