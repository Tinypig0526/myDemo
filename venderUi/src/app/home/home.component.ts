import { Component, OnInit } from '@angular/core';
import {KioskdataService} from "../kioskdata.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private  kiosk_data:KioskdataService) { }

  ngOnInit() {
    this.kiosk_data.is_home = true;
    this.kiosk_data.is_control = false;
  }

}
