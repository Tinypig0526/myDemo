import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {Alert} from "selenium-webdriver";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private route: Router) {

  }
  menu = false;
  document = 0;

  client = {
    product: '',
    amount: '',
    name: '',
    company: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    other: '',
  };

  is_success = true;

  show_menu() {
    this.is_success = true;
    this.menu = !this.menu;
  }

  close_menu() {
    this.menu = false;
  }


  submit(where) {

    if (where == 2) {
      console.log(this.client);
      if (this.client.phone == '' || this.client.name == '' || this.client.city == '') {

        this.is_success = false;
        setTimeout(() => {this.is_success = true} , 600);
        // alert('请正确填写带有*的信息!');
      } else {
        this.document = where;
      }
    } else if (where == -1) {
      this.document = 0;
      this.route.navigate(['/home']);
    } else {
      this.document = where;
    }

  }


}
