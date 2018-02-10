import { Component, OnInit } from '@angular/core';
import {FileService} from "../file.service";

@Component({
  selector: 'app-producttable',
  templateUrl: './producttable.component.html',
  styleUrls: ['./producttable.component.css']
})
export class ProducttableComponent implements OnInit {

  product_data = [];
  sortMap = {
    id  : null,
    name: null,
    quantity: null,
    sold: null,
    sum: null,
    weChat: null,
    ali: null,
    fail: null,
    failRate: null,
  };
  sortName = null;
  sortValue = null;

  constructor(private file: FileService) {
  }

  ngOnInit() {
    if (this.product_data.length) {
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
    this.product_data = [ ...this.product_data.sort((a, b) => {
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
    this.product_data = this.file.product_data;
  }

  async get_file_data() {
    await this.file.get_product_data().then(
      res => {
        this.file.product_data = res;
      }
    );
    this.get_local_data();
  }
}
