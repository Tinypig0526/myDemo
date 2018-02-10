import { Component, OnInit } from '@angular/core';


declare const echarts:any;
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  x_date = [];
  constructor() { }
  content_click = [0,0,0,0,0,0,0,0,0,0];


  ngOnInit() {
    /*this.click_trend();
    this.content_rank();
    this.content_trend();*/
  }

/*

  click_trend() {
    let myChart = echarts.init(document.getElementById('click_trend'));

    this.x_date = this.data.set_x();


    var base = +new Date(1968, 9, 3);
    var oneDay = 24 * 3600 * 1000;
    var date = [];

    var data = [Math.random() * 300];

    for (var i = 1; i < 100; i++) {
      var now = new Date(base += oneDay);
      date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
      data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
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
        text: 'Kiosk点击量走势图',
      },
      legend: {
        data:['点击量']
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
        data: this.x_date
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
          name:'模拟数据',
          type:'line',
          smooth:true,
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

  content_rank() {
    let data = this.data.data;


    for (let i = 0; i < data.length; i ++ ) {
      switch (data[i].content_id) {
        case 'app1' : this.content_click[0] = this.content_click[0] + 1;break;
        case 'app2' : this.content_click[1] = this.content_click[1] + 1;break;
        case 'app3' : this.content_click[2]  = this.content_click[2] + 1;break;
        case 'app4' : this.content_click[3] = this.content_click[3] + 1;break;
        case 'app5' : this.content_click[4] = this.content_click[4] + 1;break;
        case 'app6' : this.content_click[5] = this.content_click[5] + 1;break;
        case 'app7' : this.content_click[6] = this.content_click[6] + 1;break;
        case 'app8' : this.content_click[7] = this.content_click[7] + 1;break;
        case 'app9' : this.content_click[8]  = this.content_click[8] + 1;break;
        case 'app10' : this.content_click[9]  = this.content_click[9] + 1;break;

      }
    }



    let myChart = echarts.init(document.getElementById('content_rank'));
    let option = {
      title: {
        text: '内容点击量排名'
      },
      tooltip: {},
      legend: {
        data:['点击量']
      },
      xAxis: {
        data: ["app1","app2","app3","app4","app65","app6","app7","app8","app9","app10"]
      },
      yAxis: {},
      series: [{
        name: '点击量',
        type: 'bar',
        data: this.content_click,
      }]
    };
    myChart.setOption(option);
  }


  content_trend() {

    let x = this.data.set_x();


    let myChart = echarts.init(document.getElementById('content_trend'));

    let option = {
      title: {
        text: '内容点击量排名'
      },
      tooltip: {},
      legend: {
        data:['点击量']
      },
      xAxis: {
        data: x,
      },
      yAxis: {},
      series: [{
        name: '点击量',
        type: 'line',
        data: this.content_click,
      },
      {
        name:'邮件营销',
        type:'line',
        stack: '总量',
        data:[120, 132, 101, 134, 90, 230, 210]
      },
        {
          name:'联盟广告',
          type:'line',
          stack: '总量',
          data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
          name:'视频广告',
          type:'line',
          stack: '总量',
          data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
          name:'直接访问',
          type:'line',
          stack: '总量',
          data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
          name:'搜索引擎',
          type:'line',
          stack: '总量',
          data:[820, 932, 901, 934, 1290, 1330, 1320]
        }

      ]
    };

    myChart.setOption(option);
  }


*/

}
