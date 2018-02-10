import {Component, OnInit} from '@angular/core';
import {FileService} from "./file.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private file: FileService ) {

  }

  ngOnInit() {
    /*this.get_data();*/
  }
/*
  async get_data() {
    await this.file.get_kiosk_data().then(
      res => {
        this.file.kiosk_data = res;
      }
    );

    await this.file.get_product_data().then(
      res => {
        this.file.product_data = res;

      }
    );

    await this.file.get_session_data().then(
      res => {
        this.file.session_data = res;

        this.file.date_string = this.file.set_x();
      }
    );

    await  this.file.get_ad_data().then(
      res => {
        this.file.ad_data = res;
        this.file.creat_ad_amount();

      }
    );
  }*/
}

