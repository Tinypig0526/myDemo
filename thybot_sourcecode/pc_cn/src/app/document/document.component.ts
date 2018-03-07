import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {ControlService} from "../control.service";
import {Headers, RequestOptions, URLSearchParams} from '@angular/http';


@Component({
  selector: 'app-home',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent {
  constructor(private route: Router, private  control: ControlService) {

  }

  // client = {
  //   product: '综合机',
  //   amount: '',
  //   name: '',
  //   company: '',
  //   email: '',
  //   phone: '',
  //   city: '',
  //   state: '',
  //   other: '',
  // };

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

  url = 'http://192.168.1.13/homepage/backend/web/api/enquiry/set-enquiry';

  tab = 1;

  submit_num = -1;

  change_tab(num) {
    this.tab = num;
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

  submit() {

    if (this.tab == 1) {
      if (this.client.phone != '' && this.client.user_name != '' && this.client.city != '') {
        setTimeout(() => {
          this.route.navigate(['/home']);
        }, 3000);
        this.submit_num = 1;
        this.post_form();
      } else {
        this.submit_num = 0;
      }
    }
    if (this.tab == 2) {
      if (this.client.phone != '' && this.client.user_name != '' && this.client.city != '') {
        this.post_form();
        this.route.navigate(['/download']);
      } else {
        this.submit_num = 0;
      }
    }

  }

}
