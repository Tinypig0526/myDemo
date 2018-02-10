import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FileService} from "../file.service";

@Component({
  selector: 'app-sessiontable',
  templateUrl: './sessiontable.component.html',
  styleUrls: ['./sessiontable.component.css']
})
export class SessiontableComponent implements OnInit,AfterViewInit {
  date_string = [];

  kiosk_data = [];
  product_data = [];
  session_data = [];
  ad_data = [];

  ad_buy_count = [];
  ad_rate = [];

  num_array = [6,4,78,225,745,233,67,2,77,5,90,7754,3,4,6,1,46,8,4,7993,345,53,0];

  new_array = [];

  sortMap = {
    appId: null,
    id  : null,
    date_string: null,
    stay: null,
    kioskId: null,
  };
  sortName = null;
  sortValue = null;

  constructor(private file: FileService) {
  }

  ngOnInit() {

    /* this.new_array = this._quick_sort(this.num_array);
       console.log(this.new_array);*/
  }

  ngAfterViewInit(){
    if (this.kiosk_data.length){
      this.get_local_data();
    } else {
      this.get_file_data();
    }
  }



  sort(sortName, value) {
    this.sortName = sortName;
    this.sortValue = value;
    Object.keys(this.sortMap).forEach(key => {
      if (key !== sortName) {
        this.sortMap[ key ] = null;
      } else {
        this.sortMap[ key ] = value;
      }
      console.log(this.sortMap);
    });
    this.search();
  }

  search() {
    this.session_data = [ ...this.session_data.sort((a, b) => {
      if (a[ this.sortName ] > b[ this.sortName ]) {
        return (this.sortValue === 'ascend') ? 1 : -1;
      } else if (a[ this.sortName ] < b[ this.sortName ]) {
        return (this.sortValue === 'ascend') ? -1 : 1;
      } else {
        return 0;
      }
    }) ];
  }


  get_local_data() {
    /*this.date_string = this.file.date_string;
    this.kiosk_data = this.file.kiosk_data;
    this.product_data = this.file.product_data;*/
    this.session_data = this.file.session_data;
    this.ad_data = this.file.ad_data;
    this.ad_buy_count = this.file.ad_buy_count;
    this.ad_rate = this.file.ad_rate;
  }

  async get_file_data() {
    /*await this.file.get_kiosk_data().then(
      res => {
        this.file.kiosk_data = res;
      }
    );

    await this.file.get_product_data().then(
      res => {
        this.file.product_data = res;

      }
    );*/

    await this.file.get_session_data().then(
      res => {
        this.file.session_data = res;
        this.file.date_string = this.file.set_x();
      }
    );

  /*  await  this.file.get_ad_data().then(
      res => {
        this.file.ad_data = res;
        this.file.creat_ad_amount();

      }
    );*/

    this.get_local_data();
  }

}
