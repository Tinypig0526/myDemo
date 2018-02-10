import {AfterViewInit, Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';

declare const echarts: any;
declare const $: any;

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit, AfterViewInit,OnChanges {

  _date = null;
  // _moment = null;
  // _dateRange = [null, null];

  width: any;
  constructor() { }

  ngOnInit() {
/*

    this.width = $("#sale_amount").css('width');
    console.log(this.width);*/
  }

  ngAfterViewInit(){
    this.content_trend();
    this.sale_rank();
    this.stay_time();
    this.content_rank();
    this.sale_amount();
    this.select_year();
  }

  _disabledDate(current: Date): boolean {
    return current && current.getTime() > Date.now();
  }
  // _disabledDate(current: Date): boolean {
  //   return current && current.getTime() > Date.now();
  // }
  //
  // _disabledMonth(current: Date): boolean {
  //   return current && moment(current).day(0).valueOf() > moment().valueOf();
  // }
  // log_date(){
  //   console.log(this._date);
  // }

  content_trend() {

    let myChart = echarts.init(document.getElementById('content_trend'));

    let option = {
      backgroundColor: '#fff',
      title: {
        text: '栏目点击量走势',
        textStyle: {
          fontWeight: 'normal',
          fontSize: 20,
        },
        left: '6%',
        top: '2%',
      },
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
        data: ['app1', 'app2', 'app3', 'app4', 'app5', 'app6'],
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
        name: 'app1',
        type: 'line',
        smooth: true,
        lineStyle: {
          normal: {
            width: 1
          }
        },
        itemStyle: {
          normal: {
            color: '#659BE0'
          }
        },
        data: [59.5,115,97.5,95.6,98.1,94.8,89.6,94.1,80.1,52.4,75.8,94.7]
      }, {
        name: 'app2',
        type: 'line',
        smooth: true,
        lineStyle: {
          normal: {
            width: 1
          }
        },
        itemStyle: {
          normal: {
            color: '#EBC272'
          }
        },
        data: [97.3,99.2,99.3,100.0,99.6,90.6,80.0,91.5,69.8,67.5,90.4,84.9]
      }, {
        name: 'app3',
        type: 'line',
        smooth: true,
        lineStyle: {
          normal: {
            width: 1
          }
        },
        itemStyle: {
          normal: {
            color: '#36C6D3'
          }
        },
        data: [84.2,81.0,67.5,72.1,43.7,88.5,91.9,101.8,79.7,87.6,92.9,76]
      },{
        name: 'app4',
        type: 'line',
        smooth: true,
        lineStyle: {
          normal: {
            width: 1
          }
        },
        itemStyle: {
          normal: {
            color: '#ED6B75'
          }
        },
        data: [23,46,23,53,42,26,10,17,6,1,0,0]
      }, {
        name: 'app5',
        type: 'line',
        smooth: true,
        lineStyle: {
          normal: {
            width: 1
          }
        },
        itemStyle: {
          normal: {
            color: '#A2DCD4'
          }
        },
        data: [0,0,0,0,46,119,80.0,36,20,21,49,52]
      },
        {
          name: 'app6',
          type: 'line',
          smooth: true,
          lineStyle: {
            normal: {
              width: 1
            }
          },
          itemStyle: {
            normal: {
              color: '#212D41'
            }
          },
          data: [5,6,12,8,16.9,27.1,30.2,36.8,41.9,31,44.5,29]
        }
        ]
    };
    myChart.setOption(option);

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
        x: 'center',
        top: '6%'
      },
      backgroundColor: '#fff',
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
          data: [130, 132, 141, 157, 159]
        }
      ]
    };
    myChart.setOption(option);
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
          fontSize: 20,
        },
        x:'center',
        top: '8%'
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
        formatter: function (a , b) {
          return a + '总时长' + '88.2' + '小时';
        }, /*"{b}总时长:{c}小时",*/
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

  content_rank() {
    let myChart = echarts.init(document.getElementById('content_rank'));

    let option = {
      title:{
        text: '今日各栏目点击量',
        textStyle: {
          fontWeight: 'normal',
          fontSize: 20,
        },
        left: '6%',
        top: '3%'
      },
      backgroundColor: '#fff',
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
          data: ['app1', 'app2', 'app3', 'app4', 'app5', 'app6', 'app7', 'app8', 'app9']
        }
      ],
      series: [
        {
          name: '栏目名称',
          type: 'bar',
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

    myChart.setOption(option);
  }

  sale_amount() {

    let myChart = echarts.init(document.getElementById('sale_amount'));

    let base = +new Date(2018, 1, 1);
    let one_hour = 3600 * 1000;
    let date = [];

    let data = [Math.random() * 300];

    for (let i = 1; i < 10000; i++) {
      let now = new Date(base += one_hour);
      date.push([now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() + '时'].join('/'));
      data.push(Math.abs( Math.round((Math.random() - 0.5) * 20 + data[i - 1])));
    }

    let option = {
      backgroundColor: '#fff',
      tooltip: {
        trigger: 'axis',
        position: function (pt) {
          return [pt[0], '10%'];
        }
      },
      title: {
        left: 'center',
        text: '销售额分时图(万元)',
        textStyle: {
          fontWeight: 'normal',
          fontSize: 20,
        },
        top: '3%',
      },
      legend: {
        top: 'bottom',
        data:['意向']
      },
      toolbox: {
        feature: {
          dataZoom: {
            yAxisIndex: 'none'
          },
          restore: {},
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: date,
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '100%']
      },
      dataZoom: [{
        type: 'inside',
        start: 0,
        end: 10
      }, {
        start: 0,
        end: 10,
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '80%',
        handleStyle: {
          color: '#fff',
          shadowBlur: 3,
          shadowColor: 'rgba(0, 0, 0, 0.6)',
          shadowOffsetX: 2,
          shadowOffsetY: 2
        }
      }],
      series: [
        {
          name: '销售额',
          type: 'line',
          smooth: true,
          symbol: 'none',
          sampling: 'average',
          itemStyle: {
            normal: {
              color: '#659be0'
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#659be0'
              }, {
                offset: 1,
                color: '#659be0'
              }]),
            }
          },
          data: data
        }
      ]
    };

    myChart.setOption(option);
  }



  select_year(){
    let myChart = echarts.init(document.getElementById('year_month_week'));

    let option = {
      tooltip: {
        trigger: 'axis',
      },
      grid: {
        containLabel: true
      },
      legend: {
        data: ['销售量', '访问量']
      },
      xAxis: [{
        type: 'category',
        axisTick: {
          alignWithLabel: true
        },
        data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
      }],
      yAxis: [{
        type: 'value',
        name: '销售量',
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
        name: '销售量',
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
            /*shadowColor: 'rgba(0,0,0,0.4)',
            shadowBlur: 10,
            shadowOffsetY: 10*/
          }
        },
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
        barGap:'0%',
        barCategoryGap:'40%',
        data: [201, 222, 223, 777, 244, 255, 555, 879, 938, 1364, 1806, 2124]
      }]
    };

    myChart.setOption(option);
  }


  select_month(){
    let myChart = echarts.init(document.getElementById('year_month_week'));
    let option = {
      tooltip: {
        trigger: 'axis',
      },
      grid: {
        containLabel: true
      },
      legend: {
        data: ['销售量', '访问量']
      },
      xAxis: [{
        type: 'category',
        axisTick : {show: false},
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false
        },
        data: ['1日', '2日', '3日', '3日', '4日', '5日', '6日', '7日', '8日', '9日', '10日', '11日', '12日', '13日', '14日', '15日', '16日', '17日', '18日', '19日', '20日', '21日', '22日', '23日', '24日', '25日', '26日', '27日', '28日', '29日', '30日', ]
      }],
      yAxis: [{
        type: 'value',
        axisTick : {show: false},
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false
        },
        name: '销售量',
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
        name: '销售量',
        type: 'line',
        symbolSize: 10,
        axisTick : {show: false},
        axisLabel: {show:false},
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false
        },
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
            width: 3,
            shadowColor: 'rgba(0,0,0,0.4)',
            shadowBlur: 10,
            shadowOffsetY: 10
          }
        },
        data: [1, 13, 37, 35, 15, 13, 25, 21, 6, 45, 32, 18,24,65,32,54,12,7,20,55,12,74,9,10,35, 15, 13, 25, 21, 6, ]
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
        barGap:'0%',
        barCategoryGap:'10%',
        data: [201, 222, 223, 777, 244, 255, 555, 879, 938, 1364, 1806, 2124,1765,1346,1753,2001,1667,2151,1888,1255,1434,999,1098,1657,1443,1242,897,756,540,987]
      }]
    };

    myChart.setOption(option);
  }

  select_week(){
    let myChart = echarts.init(document.getElementById('year_month_week'));
    let option = {
      tooltip: {
        trigger: 'axis',
      },
      grid: {
        containLabel: true
      },
      legend: {
        data: ['销售量', '访问量']
      },
      xAxis: [{
        type: 'category',
        axisTick : {show: false},
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false
        },
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      }],
      yAxis: [{
        type: 'value',
        axisTick : {show: false},
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false
        },
        name: '销售量',
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
        name: '销售量',
        type: 'line',
        symbolSize: 10,
        axisTick : {show: false},
        axisLabel: {show:false},
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false
        },
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
            width: 3,
            shadowColor: 'rgba(0,0,0,0.4)',
            shadowBlur: 10,
            shadowOffsetY: 10
          }
        },
        data: [6, 15, 32, 18, 24, 5, 21,]
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
        barGap:'0%',
        barCategoryGap:'60%',
        data: [765,346,753,601,667,251,888]
      }]
    };

    myChart.setOption(option);
  }


  handelChange(){
    console.log(this._date);
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(this._date);
  }
}
