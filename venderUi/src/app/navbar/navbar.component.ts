import { Component, OnInit } from '@angular/core';
import {KioskdataService} from "../kioskdata.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor( private kiosk_data: KioskdataService, private route: Router) {
  }

  ngOnInit() {
/*    setInterval(this.kiosk_data.is_home , 3000);*/

  }

  go_to_home(){
    this.route.navigate(['./home']);
    this.kiosk_data.is_change = true;
  }



}
