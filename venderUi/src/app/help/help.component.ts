import { Component, OnInit } from '@angular/core';

import {KioskdataService} from "../kioskdata.service";


@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  constructor(private kiosk_data:KioskdataService) { }

  ngOnInit() {
    this.kiosk_data.is_home = false;
    this.kiosk_data.is_control = false;
  }
}
