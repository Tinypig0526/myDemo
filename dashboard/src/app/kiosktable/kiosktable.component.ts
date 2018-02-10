import { Component, OnInit } from '@angular/core';
import {FileService} from "../file.service";

@Component({
  selector: 'app-kiosktable',
  templateUrl: './kiosktable.component.html',
  styleUrls: ['./kiosktable.component.css']
})
export class KiosktableComponent implements OnInit {


  kiosk_data = [];
  sortMap = {
    id: null,
    name  : null,
    delay: null,
    isNormal: null,
    is_close: null,
    temp: null,
    empty: null,
    addr: null,
    mutual: null,
    fail: null,
  };
  sortName = null;
  sortValue = null;

  constructor(private file: FileService) {
  }

  ngOnInit() {
    if (this.kiosk_data.length) {
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
    this.kiosk_data = [ ...this.kiosk_data.sort((a, b) => {
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
    this.kiosk_data = this.file.kiosk_data;
  }

  async get_file_data() {
    await this.file.get_kiosk_data().then(
      res => {
        this.file.kiosk_data = res;
        this.file.creat_kiosk_door();
      }
    );
    this.get_local_data();
  }
}
