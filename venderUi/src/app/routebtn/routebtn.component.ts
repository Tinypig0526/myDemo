import { Component, OnInit } from '@angular/core';
import {KioskdataService} from "../kioskdata.service";

@Component({
  selector: 'app-routebtn',
  templateUrl: './routebtn.component.html',
  styleUrls: ['./routebtn.component.css']
})
export class RoutebtnComponent implements OnInit {


  constructor(private kiosk_data: KioskdataService) { }

  ngOnInit() {
  }

}

