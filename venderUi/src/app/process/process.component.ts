import {Component, OnInit} from '@angular/core';
import {KioskdataService} from "../kioskdata.service";

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent implements OnInit {

  value: any = {};
  disabled = false;


  constructor(private kiosk_data:KioskdataService) {
  }

  ngOnInit() {
    this.kiosk_data.is_home = false;
    this.kiosk_data.is_control = false;
  }

 /* public items: Array<string> = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
    'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
    'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin',
    'Düsseldorf', 'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg',
    'Hamburg', 'Hannover', 'Helsinki', 'Kraków', 'Leeds', 'Leipzig', 'Lisbon',
    'London', 'Madrid', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Málaga',
    'Naples', 'Palermo', 'Paris', 'Poznań', 'Prague', 'Riga', 'Rome',
    'Rotterdam', 'Seville', 'Sheffield', 'Sofia', 'Stockholm', 'Stuttgart',
    'The Hague', 'Turin', 'Valencia', 'Vienna', 'Vilnius', 'Warsaw', 'Wrocław',
    'Zagreb', 'Zaragoza', 'Łódź'];





  public selected(value: any)  {
    console.log('Selected value is: ', this.what_the_f );

  }

  public removed(value: any) {
    console.log('Removed value is: ', this.what_the_f);
  }

  public typed(value: any) {
    console.log('New search input: ', this.what_the_f);
  }

  public refreshValue(value: any) {
    this.value = value;
  }*/
}
