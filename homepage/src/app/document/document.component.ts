import {Component} from '@angular/core';
import {Router} from "@angular/router";



@Component({
  selector: 'app-home',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent {
  constructor(private route: Router) {

  }

  client = {
    product: '综合机',
    amount: '',
    name: '',
    company: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    other: '',
  };

  tab = 1;

  time = 3;

  submit_num = -1;

  change_tab(num) {
    this.tab = num;
  }

  submit() {

    if ( this.tab == 1) {
      if (this.client.phone != '' && this.client.name != '' && this.client.city != '') {
        setTimeout( () => {this.route.navigate(['/home'])} , 3000);
        this.submit_num = 1;
      } else {
        this.submit_num = 0;
      }
    }
    if ( this.tab == 2) {
      if (this.client.phone != '' && this.client.name != '' && this.client.city != '') {
        this.route.navigate(['/download']);
      } else {
        this.submit_num = 0;
      }
    }

  }

}
