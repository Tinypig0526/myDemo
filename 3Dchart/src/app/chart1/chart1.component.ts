import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';

declare const echarts: any;
@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.css']
})
export class Chart1Component implements OnInit, AfterViewInit {

 /* random_data: Array<any>;*/
  data = [];
  month_num = 1;
  pause = false;

  time_id:any;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    for (let i = 0; i < 12; i++) {
      this.data.push(this.random_value());
    }
    console.log(this.data);

    this.set_chart(1 , false);
  }

 /* view_data(month) {
    this.pause = true;
    this.month_num = month;

    setTimeout( () => {
      this.pause = false;
    } , 120000);

  }*/

  random_value() {
    let z: any;

    let day = [ 0, 0, 0];
    let month = [];

    for (let x = 0; x < 7 ; x++) {
      for (let y = 0; y < 30 ; y++) {
        z = Math.random() * 19;

        if ( z - Math.floor(z) < 0.2  ) {
          z = 0;
        } else if (z - Math.floor(z) >= 0.2 && z - Math.floor(z) < 0.4 ) {
          z = (z / 2).toFixed(2);
        } else if (z - Math.floor(z) >= 0.4 && z - Math.floor(z) < 0.6 )  {
          z = (z / 3).toFixed(2);
        } else if (z - Math.floor(z) >= 0.6 && z - Math.floor(z) < 0.8 ) {
          z = (z / 4).toFixed(2);
        } else {
          z = z.toFixed(2);
        }
        day[0] = x;
        day[1] = y;
        day[2] = z;
        month.push(JSON.parse(JSON.stringify(day)));
      }
    }
    return month;
  }

  set_chart(month:number, pause:boolean) {


    clearInterval(this.time_id);

    this.month_num = month;

    let myChart = echarts.init(document.getElementById('chart-div'));

    let hours = ['1日', '2日', '3日', '4日', '5日', '6日', '7日', '8日', '9日', '10日',
                 '11日', '12日', '13日', '14日', '15日', '16日', '17日', '18日', '19日', '20日',
                 '21日', '22日', '23日', '24日', '25日', '26日', '27日', '28日', '29日', '30日'
    ];

    let days = ['g2s', '原型机', 'CSJ', 'YM', '人民科技', '臻荣', '乐动'];
    let option = {
      backgroundColor: '#333333',
      title: {
        text: '2018年利保各机型销售额',
        textStyle: {
          fontSize: 32,
          color: 'white',
        },
        x: 'center',
        y: '4%',
      },
      tooltip: {
        show: true,
        formatter: function (a) {
        return '' + days[a.value[1]] + '<br />' + a.value[0] + '日销售额 :' + a.value[2] + '万元';
        }
      },
      visualMap: {
        max: 20,
        inRange: {
          color: [
            '#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026'
           ]
         /* color: ['#ed6b75',
            '#36c6d3',
            '#ebc272',
            '#659be0'
          ]*/
        },
      },
      xAxis3D: {
        type: 'category',
        data: hours,
        name: '日期',
        axisLine: {
          lineStyle: {
            color: '#ccc'
          }
        }
      },
      yAxis3D: {
        type: 'category',
        data: days,
        name: '机型',
        axisLine: {
          lineStyle: {
            color: '#ccc'
          }
        }
      },
      zAxis3D: {
        type: 'value',
        name: '销售额(万元)',
        axisLine: {
          lineStyle: {
            color: '#ccc'
          }
        }
      },
      grid3D: {
        boxWidth: 200,
        boxDepth: 80,
        viewControl: {
          // projection: 'orthographic'
        },
        light: {
          main: {
            intensity: 1.2,
            shadow: true,
          },
          ambient: {
            intensity: 0.3
          },
        /*  postEffect:{
            enable: true,
          }*/
        }
      },
      series: [{
        type: 'bar3D',
        name: '当日销售额',
        animationDurationUpdate : 2500,
        data: this.data[0].map(function (item) {
          return {
            value: [item[1], item[0], item[2]],
          };
        }),
        shading: 'lambert',
        label: {
          textStyle: {
            fontSize: 16,
            borderWidth: 1
          }
        },
       /* itemStyle: {
          opacity: 0.2
        },*/
        emphasis: {
          label: {
            textStyle: {
              fontSize: 20,
              color: '#900'
            }
          },
          itemStyle: {
            color: '#900'
          }
        }
      }]
    };
    myChart.setOption(option);

    if (pause === false) {

      this.time_id = setInterval( () => {
        if (this.month_num >= 12) {
          this.month_num = 1;
        } else {
          this.month_num ++;
        }

        console.log(this.time_id );
        this.cdr.detectChanges();
        option.series[0].data = this.data[this.month_num - 1].map(function (item) {
          return {
            value: [item[1], item[0], item[2]],
          };
        });
        myChart.setOption(option);

      } , 5000);
    } else {

      clearInterval(this.time_id);

      option.series[0].data = this.data[this.month_num - 1].map(function (item) {
        return {
          value: [item[1], item[0], item[2]],
        };
      });
      myChart.setOption(option);

      setTimeout( () => {
        this.set_chart(this.month_num , false);
      }, 120000);
    }
  }
}
