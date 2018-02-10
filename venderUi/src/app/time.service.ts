import { Injectable } from '@angular/core';
import {Router} from "@angular/router";


declare const $: any;
@Injectable()
export class TimeService {
  time_counter = 0;

  constructor(private route: Router) {
    window.addEventListener('touchstart',  (event) => {   // 120秒不触摸自动关闭模态框、返回主页
      /*console.log(event);*/
      this.time_counter = 0;
      $('#screen_save').modal('hide');
    });

    window.addEventListener('click',  (event) => {   // 120秒不点击鼠标自动关闭模态框、返回主页
      /*  console.log(event);*/
      this.time_counter = 0;
      $('#screen_save').modal('hide');
    });

    setInterval(() => {
      this.time_counter++;
      console.log(this.time_counter);
      if (this.time_counter === 12) {
        $('#buy_modal,#pay_modal,#form_Modal,#set_layout,#put_up').modal('hide');
        this.route.navigate(['/home']);
        this.time_counter = 0;
        $('#screen_save').modal('show');
      }
    }, 10000);
  }

}
