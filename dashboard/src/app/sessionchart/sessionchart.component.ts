import {AfterViewInit, Component, OnInit} from '@angular/core';

import {FileService} from "../file.service";

declare const echarts:any;

@Component({
  selector: 'app-sessionchart',
  templateUrl: './sessionchart.component.html',
  styleUrls: ['./sessionchart.component.css']
})
export class SessionchartComponent implements OnInit ,AfterViewInit {

  session_data:any;
  date_string:any;

  constructor(private file: FileService) { }

  ngOnInit() {

  }

  ngAfterViewInit(){
    if(this.file.session_data){
      this.session_data = this.file.session_data;
      this.date_string = this.file.date_string;
      this.click_trend();
      this.stay_time();
      this.content_rank();
      this.content_trend();
    }else {

      this.get_file_data();
    }
  }

  async get_file_data(){
    await this.file.get_session_data().then((res) =>{
        this.session_data = res;
        this.file.session_data = res;
      this.date_string = this.file.set_x();
    });



    console.log(this.date_string);
    this.click_trend();
    this.stay_time();
    this.content_rank();
    this.content_trend();
  }

  click_trend() {


    let myChart = echarts.init(document.getElementById('click_trend'));

    let x_date = this.date_string;
    let data = [];

    for (let i = 0; i < x_date.length; i++) {
      data.push(Math.round((Math.random()) * 20));
    }



    let option = {
      tooltip: {
        trigger: 'axis',
        position: function (pt) {
          return [pt[0], '10%'];
        }
      },
      title: {
        left: 'center',
        text: '设备访问量走势图',
      },
      legend: {
        data: ['访问次数']
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
        data: x_date,
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
          name: '模拟数据',
          type: 'line',
          smooth: true,
          symbol: 'none',
          sampling: 'average',
          itemStyle: {
            normal: {
              color: 'rgb(255, 70, 131)'
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgb(255, 158, 68)'
              }, {
                offset: 1,
                color: 'rgb(255, 70, 131)'
              }])
            }
          },
          data: data
        }
      ]
    };

    myChart.setOption(option);
  }

  stay_time() {
    let myChart = echarts.init(document.getElementById('stay_time'));
    let stay = [];
    let value_array = [
      {value: 0 , name: 'app1'},
      {value: 0 , name: 'app2'},
      {value: 0 , name: 'app3'},
      {value: 0 , name: 'app4'},
      {value: 0 , name: 'app5'},
      {value: 0 , name: 'app6'},
      {value: 0 , name: 'app7'},
      {value: 0 , name: 'app8'},
      {value: 0 , name: 'app9'}
    ];
    for (let i = 0; i < this.session_data.length; i++) {
      switch (this.session_data[i].appId) {
        case 'app1':  value_array[0].value = value_array[0].value + parseInt(this.session_data[i].stay); break;
        case 'app2':  value_array[1].value = value_array[0].value + parseInt(this.session_data[i].stay); break;
        case 'app3':  value_array[2].value = value_array[0].value + parseInt(this.session_data[i].stay); break;
        case 'app4':  value_array[3].value = value_array[0].value + parseInt(this.session_data[i].stay); break;
        case 'app5':  value_array[4].value = value_array[0].value + parseInt(this.session_data[i].stay); break;
        case 'app6':  value_array[5].value = value_array[0].value + parseInt(this.session_data[i].stay); break;
        case 'app7':  value_array[6].value = value_array[0].value + parseInt(this.session_data[i].stay); break;
        case 'app8':  value_array[7].value = value_array[0].value + parseInt(this.session_data[i].stay); break;
        case 'app9':  value_array[8].value = value_array[0].value + parseInt(this.session_data[i].stay); break;
      }
    }

    console.log(value_array);
    let option = {
      title : {
        text: '栏目停留时间分布图',
        subtext: '伪数据',
        x: 'center',
      },
      tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['app1','app2','app3','app4', 'app5','app6','app7','app8','app9']
      },
      series : [
        {
          name: '访问来源',
          type: 'pie',
          radius : '55%',
          center: ['50%', '60%'],
          data: value_array,
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };

    myChart.setOption(option);
  }

  content_rank() {


    let myChart = echarts.init(document.getElementById('content_rank'));
    let app_click = [0,0,0,0,0,0,0,0,0];

    for (let i = 0; i < this.session_data.length; i ++ ) {
      switch (this.session_data[i].appId) {
        case 'app1' : app_click[0] ++ ; break;
        case 'app2' : app_click[1] ++; break;
        case 'app3' : app_click[2] ++; break;
        case 'app4' : app_click[3] ++; break;
        case 'app5' : app_click[4] ++; break;
        case 'app6' : app_click[5] ++; break;
        case 'app7' : app_click[6] ++; break;
        case 'app8' : app_click[7] ++; break;
        case 'app9' : app_click[8] ++; break;
      }
    }


    let option = {
      title: {
        text: '各栏目点击量'
      },
      tooltip: {},
      legend: {
        data:['点击量']
      },
      xAxis: {
        data: ["app1","app2","app3","app4","app65","app6","app7","app8","app9"]
      },
      yAxis: {},
      series: [{
        name: '点击量',
        type: 'bar',
        data: app_click,
      }]
    };
    myChart.setOption(option);
  }


  content_trend() {

    let myChart = echarts.init(document.getElementById('content_trend'));

    let option = {
      backgroundColor: '#394056',
      title: {
        text: '栏目点击量走势',
        textStyle: {
          fontWeight: 'normal',
          fontSize: 16,
          color: '#F1F1F3'
        },
        left: '6%'
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
        data: ['app1', 'app2', 'app3'],
        right: '4%',
        textStyle: {
          fontSize: 12,
          color: '#F1F1F3'
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
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(137, 189, 27, 0.3)'
            }, {
              offset: 0.8,
              color: 'rgba(137, 189, 27, 0)'
            }], false),
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowBlur: 10
          }
        },
        itemStyle: {
          normal: {
            color: 'rgb(137,189,27)'
          }
        },
        data: [96.3,96.4,97.5,95.6,98.1,94.8,89.6,94.1,80.1,52.4,75.8,94.7]
      }, {
        name: 'app2',
        type: 'line',
        smooth: true,
        lineStyle: {
          normal: {
            width: 1
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(0, 136, 212, 0.3)'
            }, {
              offset: 0.8,
              color: 'rgba(0, 136, 212, 0)'
            }], false),
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowBlur: 10
          }
        },
        itemStyle: {
          normal: {
            color: 'rgb(0,136,212)'
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
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(219, 50, 51, 0.3)'
            }, {
              offset: 0.8,
              color: 'rgba(219, 50, 51, 0)'
            }], false),
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowBlur: 10
          }
        },
        itemStyle: {
          normal: {
            color: 'rgb(219,50,51)'
          }
        },
        data: [84.2,81.0,67.5,72.1,43.7,88.5,91.9,101.8,79.7,87.6,92.9,0]
      }, ]
    };
    myChart.setOption(option);
  }

}
/*let option = {
      title: {
        text: '栏目访问量走势'
      },
      tooltip: {},
      legend: {
        data:['访问量']
      },
      xAxis: {
        data: ['周一', '周二','周三','周四','周五', '周六', '周日'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name:'app1',
          type:'line',
          stack: '总量',
          data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
          name:'app2',
          type:'line',
          stack: '总量',
          data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
          name:'app3',
          type:'line',
          stack: '总量',
          data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
          name:'app4',
          type:'line',
          stack: '总量',
          data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
          name:'app5',
          type:'line',
          stack: '总量',
          data:[1210, 932, 777, 524, 588, 699, 200]
        },
        {
          name:'app6',
          type:'line',
          stack: '总量',
          data:[120, 782, 1001, 999, 201, 530, 1300]
        },
        {
          name:'app7',
          type:'line',
          stack: '总量',
          data:[820, 932, 901, 934, 1290, 1330, 1320]
        },
        {
          name:'app8',
          type:'line',
          stack: '总量',
          data:[820, 932, 901, 934, 1290, 1330, 1320]
        },
        {
          name:'app9',
          type:'line',
          stack: '总量',
          data:[820, 932, 901, 934, 1290, 1330, 1320]
        }

      ]
    };*/
