import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {KioskdataService} from '../kioskdata.service';

declare let $: any;
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  times = 0;
  is_login = false;
  is_control = false;

  user_name: any;
  user_pass: any;


  constructor(private route: Router, private kiosk_data:KioskdataService) {
  }

  ngOnInit() {
    this.kiosk_data.is_home = false;
    this.kiosk_data.is_control = false;
  }


  eggshell() {         //  点击“关于我们”8次 弹出登录框
    if (this.times < 8) {
      this.times++;
      this.is_login = false;
    }
    if (this.times === 8) {
      this.is_login = true;
      this.times = 0;
    }
  }


  log_in() {   //  登陆到后台控制界面
    if (this.user_name === 'thybot' && this.user_pass === '123456') {
      this.is_control = true;
      $('#form_Modal').modal('hide');
      this.route_to_control();
    } else {
      console.log('帐号' + this.user_name, '密码', this.user_pass);
      alert('用户名或密码错误');
    }
  }


  route_to_control() {   // 路由到控制界面
    this.route.navigate(['/test']);
  }
}
