import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FileService {

  date_string = [];

  kiosk_data: any;
  product_data: any;
  session_data: any;
  ad_data: any;

  ad_buy_count = [];
  ad_rate = [];

  is_close = [];
  constructor(private http: HttpClient) {
  }

  get_kiosk_data() {
    return this.http.get('./assets/json/kiosk.json')
      .toPromise()
      .then(
        result => result
      );
  }

  get_product_data() {
    return this.http.get('./assets/json/product.json')
      .toPromise()
      .then(
        result => result
      );
  }

  get_session_data() {
    return this.http.get('./assets/json/session.json')
      .toPromise()
      .then(
        result => result
      );
  }

  get_ad_data() {
    return this.http.get('./assets/json/ad.json')
      .toPromise()
      .then(
        result => result
      );
  }

  set_x() {
    let x = [];
    for (let i = 0; i < this.session_data.length; i++) {
      x.push(this.getMyDate(this.session_data[i].date));
      this.session_data[i].date_string = this.getMyDate(this.session_data[i].date)
    }
    return x;
  }

  creat_ad_amount() {

    for (let i = 0; i < this.ad_data.length; i++) {
      this.ad_buy_count.push(Math.round(Math.random() * 5));
      this.ad_rate.push(this.ad_buy_count[i] / this.ad_data[i].hits);
      this.ad_data[i].ad_buy_count = this.ad_buy_count[i];
      this.ad_data[i].ad_rate = this.ad_rate[i];
    }
  }

  creat_kiosk_door() {

    for (let i = 0; i < this.kiosk_data.length; i++) {

      if (Math.random() * 20 < 1) {
        this.is_close.push(false);
        this.kiosk_data[i].is_close = this.is_close[i];
      } else {
        this.is_close.push(true);
        this.kiosk_data[i].is_close = this.is_close[i];
      }
    }
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


