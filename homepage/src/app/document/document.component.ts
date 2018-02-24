import {Component} from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent {

  tab = 1;


  change_tab(num) {
    this.tab = num;
  }
}
