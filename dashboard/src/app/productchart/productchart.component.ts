import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FileService} from "../file.service";
import {el} from "@angular/platform-browser/testing/src/browser_util";
declare const echarts:any;
@Component({
  selector: 'app-productchart',
  templateUrl: './productchart.component.html',
  styleUrls: ['./productchart.component.css']
})
export class ProductchartComponent implements OnInit, AfterViewInit {

  product_data:any;

  constructor(private file: FileService) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    if(this.file.product_data) {
      this.product_data = this.file.product_data
      this.sold_rank();
      this.pay_method();
      this.product_rank();
    } else {
      this.get_file_data();
    }



  }


  async get_file_data() {
    await this.file.get_product_data().then((res) => {
      this.product_data = res;
    });
    this.sold_rank();
    this.pay_method();
    this.product_rank();

  }

  async sold_rank() {

    let myChart = echarts.init(document.getElementById('sold_rank'));


    let option = {
      backgroundColor: '#0E2A43',
      title: {
        text: '城市销售额/交易次数排名',
        textStyle: {
          color: 'white',
        },
      },
      legend: {
        bottom: 20,
        textStyle:{
          color:'#fff',
        },
        data: ['交易笔数(万笔)', '销售额(万元)']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
      },

      tooltip: {
        show:"true",
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      xAxis:  {
        type: 'value',
        axisTick : {show: false},
        axisLine: {
          show: false,
          lineStyle:{
            color:'#fff',
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
              color:'#fff',
            }
          },
          data: ['广州','深圳','东莞','天津','珠海','北京','成都','南京','重庆','长沙']
        },
        {
          type: 'category',
          axisLine: {show:false},
          axisTick: {show:false},
          axisLabel: {show:false},
          splitArea: {show:false},
          splitLine: {show:false},
          data: ['广州','深圳','东莞','天津','珠海','北京','成都','南京','重庆','长沙']
        },

      ],
      series: [
        {
          name: '销售额(万元)',
          type: 'bar',
          yAxisIndex:1,

          itemStyle:{
            normal: {
              show: true,
              color: '#277ace',
              barBorderRadius:50,
              borderWidth:0,
              borderColor:'#333',
            }
          },
          barGap:'0%',
          barCategoryGap:'50%',
          data: [120, 132, 101, 134, 90, 230, 210, 125, 231, 132]
        },
        {
          name: '交易笔数(万笔)',
          type: 'bar',
          itemStyle:{
            normal: {
              show: true,
              color: '#5de3e1',
              barBorderRadius:50,
              borderWidth:0,
              borderColor:'#333',
            }
          },
          barGap:'0%',
          barCategoryGap:'50%',
          data: [32, 52, 41, 64, 15, 10, 32, 25, 210, 32]
        }

      ]
    };

    myChart.setOption(option);
  }

  async pay_method() {

    let myChart = echarts.init(document.getElementById('pay_method'));


    let option = {
      backgroundColor: '#ccc',
      series: [{
        type: 'pie',
        name: '',
        radius: [120, 200],
        hoverAnimation: false,
        silent: true,
        clockwise: false,
        data: [{
          value: 0,
          name: '',
          label: {
            normal: {
              show: true,
              position: 'center',
              formatter: '支付方式',
              color: '#fff',
              fontSize: 20,
              fontWeight: 'bold'
            }
          },
          itemStyle: {
            normal: {
              color: '#ccc',
              shadowBlur: 50,
              shadowColor: 'yellow',
              show: true
            }
          }
        }]
      },

        {
          type: 'pie',
          radius: [120, 120],
          hoverAnimation: false,
          silent: true,
          data: [{
            value: 0,
            name: '支付方式',
            label: {
              normal: {
                show: true,
                position: 'center',
                color: '#fff',
                fontSize: 20,
                fontWeight: 'bold'
              }
            },
            itemStyle: {
              normal: {
                color: '#ccc',
                shadowBlur: 50,
                shadowColor: 'yellow',
              }
            }
          }]
        }, {
          type: 'pie',
          radius: [130, 190],
          hoverAnimation: false,
          data: [{
            value: 4980,
            name: '支付宝支付',
            label: {
              normal: {
                color: '#fff',
                fontSize: 16,
                formatter: '{b}：{c}\n\n比例：{d}%'
              }
            },
            labelLine: {
              normal: {
                length: 60
              }
            }
          }, {
            value: 5170,
            name: '微信支付',
            label: {
              normal: {
                color: '#fff',
                fontSize: 16,
                formatter: '{b}：{c}\n\n比例：{d}%'
              }
            },
            labelLine: {
              normal: {
                length: 60
              }
            }
          }]
        }
      ]
    };
    myChart.setOption(option);
  }



  compare(property) {
    return function(a,b){
      let value1 = a[property];
      let value2 = b[property];
      return value2 - value1;
    };
  }

  product_rank() {


    console.log(this.product_data);
    let rank = [];
    rank = this.product_data.sort(this.compare('sold'));
    /*console.log('rank',rank);*/

    let rank20 = rank.slice(0, 20);


    let product_x = [];
    let product_y = [];
    for (let i = 0; i < rank20.length ; i ++ ) {
      product_x.push(rank20[i].name);
      product_y.push(rank20[i].sold);
    }


    let myChart = echarts.init(document.getElementById('product_rank'));

    let min = 100;
    let max = 2000;
    let option = {
      backgroundColor:'#0e2147',
      title:{
        text: '销售额Top20商品',
        textStyle: {
          color: 'white',
        },
      },
      grid: {
        left: '2.5%',
        top:'19.5%',
        right: '2.8%',
        bottom: '22%',
        containLabel: true
      },
      xAxis : [
        {
          type : 'category',
          axisLabel:{
            textStyle:{
              color: 'rgba(255,255,255,0.8)',
              fontSize:'14',
            },
            interval:0,
            rotate:-45,
          },
          data :product_x,
          axisLine:{
            lineStyle:{
              color:'rgba(160,160,160,0.3)',
            }
          },
          axisTick:{
            show:false
          },
        }
      ],
      yAxis : [
        {
          type : 'value',
          name:'销售额:(万元)',
          nameGap:25,
          nameTextStyle:{
            color:'#ffffff',
            fontSize:'16',
          },
          axisLabel: {
            textStyle: {
              color: 'rgba(255,255,255,0.8)',
              fontSize:'14',
            }
          },
          axisTick:{
            show:false
          },
          axisLine: {
            lineStyle:{
              color:'rgba(160,160,160,0.3)',
            }
          },
          splitLine: {
            lineStyle:{
              color:'rgba(160,160,160,0.3)',
            }
          },
        },
      ],
      series : [
        {
          type:'bar',
          barWidth: '40%',
          itemStyle:{
            normal:{
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#de682e'
              }, {
                offset: 1,
                color: '#ecc232'
              }]),
            }
          },
          label:{
            normal:{
              show:true,
              position:'top',
              formatter:function(param){
                if(param.value==max||param.value==min){
                  return ''
                }
                return param.value
              },
              textStyle:{
                color:'#ffffff',
                fontSize:'16',
              }
            }
          },
          markPoint : {
            symbolSize:'70',
            label:{
              normal:{
                textStyle:{
                  color:'#ffffff',
                  fontSize:'16',
                }
              }
            },
           },
          data:product_y,
        }
      ]
    };
    myChart.setOption(option);
  }


}
