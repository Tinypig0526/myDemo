import {Component} from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent {

  tab = 1;


  change_tab(num) {
    this.tab = num;
  }
}
