import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Headers, RequestOptions, URLSearchParams} from '@angular/http';
import {ControlService} from "./control.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  menu = false;
  document = 0;

  client = {
    product_name: '综合机',
    product_num: 0,
    user_name: '',
    company_name: '',
    email: '',
    phone: '',
    city: '',
    country: '',
    remark: '',
  };

  is_success = true;

  url = 'http://192.168.1.13/homepage/backend/web/api/enquiry/set-enquiry';
  url_day = 'http://192.168.1.13/homepage/backend/web/api/hot-documents/day-sort';
  url_week = 'http://192.168.1.13/homepage/backend/web/api/hot-documents/week-sort';
  url_times = 'http://192.168.1.13/homepage/backend/web/api/hot-documents/click-download';

  week: any;

  constructor(private route: Router, private  control: ControlService) {
  }


  ngOnInit() {
    this.get_week();
  }


  show_menu() {
    this.is_success = true;
    this.menu = !this.menu;
  }

  close_menu() {
    this.menu = false;
  }


  post_form() {
    let data = new URLSearchParams();
    for (let key in this.client) {
      this.client[key].length > 0 && data.append(key, this.client[key]);
    }
    // console.log(data);
    this.control.postData(this.url, data).then(() => {
      console.log('success!');
    });

  }

  get_week() {
    this.control.getData(this.url_week).then(data => {
      this.week = data.data;
      console.log(this.week);
    });
  }

  submit(where) {

    if (where == 2) {
      console.log(this.client);
      if (this.client.phone == '' || this.client.user_name == '' || this.client.city == '') {
        this.is_success = false;
        setTimeout(() => {this.is_success = true} , 600);

      } else {
        this.document = where;
        this.post_form();
      }
    } else if (where == -1) {
      this.document = 0;
      this.post_form();
      this.route.navigate(['/home']);
    } else {
      this.document = where;
    }

  }


}
