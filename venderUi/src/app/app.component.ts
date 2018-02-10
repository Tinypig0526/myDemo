import {Component, OnInit} from '@angular/core';
import { KioskdataService } from './kioskdata.service';
import {TimeService} from "./time.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  ngOnInit() {
    this.kiosk_data.initRobot();

  }
  constructor(private kiosk_data: KioskdataService,private time_count: TimeService) {


  }

}
