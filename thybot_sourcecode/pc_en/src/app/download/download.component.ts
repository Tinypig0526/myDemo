import {Component, OnInit} from '@angular/core';
import {ControlService} from '../control.service';



@Component({
  selector: 'app-home',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent  implements OnInit {

  day: any;
  week: any;

  url_day = 'http://192.168.1.13/homepage/backend/web/api/hot-documents/day-sort';
  url_week = 'http://192.168.1.13/homepage/backend/web/api/hot-documents/week-sort';
  url_times = 'http://192.168.1.13/homepage/backend/web/api/hot-documents/click-download';

  constructor(private control: ControlService) {

  }

  ngOnInit() {
    this.get_day();
    this.get_week();
  }


  get_day() {
    this.control.getData(this.url_day).then(data => {
      this.day = data.data;
      console.log(this.day);
    });
  }

  get_week() {
    this.control.getData(this.url_week).then(data => {
      this.week = data.data;
      console.log(this.week);
    });
  }
}
