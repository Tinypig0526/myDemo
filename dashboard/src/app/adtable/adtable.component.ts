import { Component, OnInit } from '@angular/core';
import {FileService} from "../file.service";

@Component({
  selector: 'app-adtable',
  templateUrl: './adtable.component.html',
  styleUrls: ['./adtable.component.css']
})
export class AdtableComponent implements OnInit {

  ad_data = [];

  ad_buy_count = [];
  ad_rate = [];


  sortMap = {
    id  : null,
    dur: null,
    playCount: null,
    allDur: null,
    hits: null,
    hitRate: null,
    ad_buy_count: null,
    ad_rate: null,
  };
  sortName = null;
  sortValue = null;

  constructor(private file: FileService) {
  }

  ngOnInit() {
    if (this.ad_data.length){
      this.get_local_data();
    } else {
      this.get_file_data();
    }
    /* this.new_array = this._quick_sort(this.num_array);
       console.log(this.new_array);*/
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
    this.ad_data = [ ...this.ad_data.sort((a, b) => {
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
    this.ad_data = this.file.ad_data;
    this.ad_buy_count = this.file.ad_buy_count;
    this.ad_rate = this.file.ad_rate;
  }

  async get_file_data() {

    await  this.file.get_ad_data().then(
      res => {
        this.file.ad_data = res;
        this.file.creat_ad_amount();
      }
    );

    this.get_local_data();
  }
}
