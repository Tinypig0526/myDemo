import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { environment } from '../environments/environment';
// 定义Ice变量

declare const Ice: any;
declare const ThybotKioskService: any;
declare const window: any;

@Injectable()
export class PayService {
  host = environment.hostname;
  private communicator: any;
  private proxy_mpay: any;

  constructor() {
    this.communicator = Ice.initialize();

    this.proxy_mpay = this.communicator.stringToProxy('KioskMPayService:ws -h ' + this.host + ' -p 10004');

  }
  // 获取支付服务
  getPayService(): Promise<any> {
    return ThybotKioskService.MPayService.MPayInterfacePrx.checkedCast(this.proxy_mpay)
      .then((result: any) => result ,
        (err) => {
        window.locallog.log('MPayService获取失败: ' + JSON.stringify(err), 'error');
    });
  }

  // 支付服务
  // 获取支付二维码（pay_type：0微信支付/1支付宝支付）
  getMPay(fn_this, pay_type, product_name, product_price, fn_created, fn_payed): Promise<any> {
    var self = this;

    return this.getPayService().then((service) => {
      var uuid = self.uuid();
      var type = ThybotKioskService.MPayService.MPayType.valueOf(pay_type);     // pay_type：0微信支付/1支付宝支付
      var price = product_price;
      var name = product_name.length < 32 ? product_name : product_name.substr(0, 32);
      var timeout = 10;

     /* console.log(uuid)
      console.log(type)
      console.log(price)
      console.log(name)
      console.log(timeout)*/
      service.startSession(uuid, type, price, name, timeout).then((tradeInfo) => {
        // 生成二维码
        fn_created(fn_this, tradeInfo);
        // 轮询支付是否成功
        service.querySession(tradeInfo, 60).then((res) => {
          fn_payed(fn_this, res);
        }, (err) => {
          console.log(err);
        });
      }, (err) => {
        console.log(err);
      });
    });
  }
  // 取消支付
  cancelMpay(): Promise<any> {
    return this.getPayService().then((service: any) => service.cancelCurrentSession());
  }
// 辅助函数生成uuid
  uuid(): string {
    var s = [];
    var hexDigits = '0123456789abcdef';
    for (var i = 0; i < 36; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = '4';  // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = '-';

    var uuid = s.join('');
    return uuid;
  }

}
