import { Injectable } from '@angular/core';
import {until} from "selenium-webdriver";
import elementIsSelected = until.elementIsSelected;

@Injectable()
export class DataService {


  content_id: string;
  spend_time: number;
  date_stamp = 1514736000000;
  session_id = 0;
  robot_id: string;
  robot_address: string;
  robot_status: string;

  json_row = {};  // 空对象
  data = [];



  constructor() {
  }

  creat_content_id() {
    let contentid = 0;
      contentid = Math.round(1 + Math.random() * 9);  // 10个栏目 1~10
    return contentid;
  }

  creat_add_time() {

    let addtime = 0;
    addtime = Math.round(Math.random() * 3600) * 1000 ;
    return addtime;
  }

  creat_spent_time() {

    let spendtime = 0;
    spendtime = Math.round( 1 + Math.random() * 119);  // 停留时间 1 ~ 120
    return spendtime;

  }

  creat_robot_id() {
    let id  = 0;
    id = Math.round(1 + Math.random() * 49);  // 50台机器 1~50
    return id;
  }

  creat_robot_address() {
    let no = 0;
    let city = '';
    no = Math.round(Math.random() * 5);
    switch (no) {
      case 0:  city = '北京'; break;
      case 1:  city = '上海'; break;
      case 2:  city = '深圳'; break;
      case 3:  city = '广州'; break;
      case 4:  city = '珠海'; break;
      case 5:  city = '杭州'; break;
    }
    return city;
  }

  creat_robot_status() {
    let no = 0;
    let status = '';
    no = Math.round(Math.random() * 10);

    switch (no) {
      case 10:  status = '离线'; break;
      case 9:  status = '缺货'; break;
      default : status = '正常'; break;
    }

    return status;
  }


  creat_data() {

    for (let i = 0; i < 100; i++) {

      this.date_stamp = this.date_stamp + this.creat_add_time();
      this.content_id = 'app' + String(this.creat_content_id());
      this.session_id = this.session_id + 1;
      this.spend_time = this.creat_spent_time();
      this.robot_id = 'kiosk' + String(this.creat_robot_id());
      this.robot_address = this.creat_robot_address();
      this.robot_status = this.creat_robot_status();


      this.json_row['date'] = this.date_stamp;
      this.json_row['content_id'] = this.content_id;
      this.json_row['session_id'] = this.session_id;
      this.json_row['spend_time'] = this.spend_time;
      this.json_row['kiosk_id'] = this.robot_id;
      this.json_row['city'] = this.robot_address;
      this.json_row['status'] = this.creat_robot_status();

      this.data.push(JSON.parse(JSON.stringify(this.json_row)));
    }
    return this.data;
  }

  set_x() {
    let x = [];
    if (this.data.length > 0) {
      for (let i = 0; i < this.data.length; i++) {
        x.push(this.getMyDate(this.data[i].date));
      }
    }
    return x;
  }



//  时间戳转成时间
  getMyDate(num) {
    var oDate = new Date(num),
      oYear = oDate.getFullYear(),
      oMonth = oDate.getMonth()+1,
      oDay = oDate.getDate(),
      oHour = oDate.getHours(),
      oMin = oDate.getMinutes(),
      oSen = oDate.getSeconds(),
      oTime = oYear +'-'+ this.getzf(oMonth) +'-'+ this.getzf(oDay) +' '+ this.getzf(oHour) +':'+ this.getzf(oMin) +':'+ this.getzf(oSen);//最后拼接时间
    return oTime;
  };
  //补0操作
  getzf(num){
    if(parseInt(num) < 10){
      num = '0'+num;
    }
    return num;
  }


}
