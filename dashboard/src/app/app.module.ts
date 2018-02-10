import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ChartComponent} from './chart/chart.component';
import {TableComponent} from './table/table.component';
import {NgZorroAntdModule} from "ng-zorro-antd";
import {NavComponent} from './nav/nav.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule, Routes} from "@angular/router";
import {MapComponent} from './map/map.component';
import {FileService} from "./file.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { KioskchartComponent } from './kioskchart/kioskchart.component';
import { ProductchartComponent } from './productchart/productchart.component';
import { SessionchartComponent } from './sessionchart/sessionchart.component';
import { AdchartComponent } from './adchart/adchart.component';
import { KiosktableComponent } from './kiosktable/kiosktable.component';
import { ProducttableComponent } from './producttable/producttable.component';
import { AdtableComponent } from './adtable/adtable.component';
import { SessiontableComponent } from './sessiontable/sessiontable.component';
import { DashComponent } from './dash/dash.component';
import {FormsModule} from "@angular/forms";

const routeConfig: Routes = [
  {path: '', redirectTo: '/map', pathMatch: 'full'},
  {path: 'map', component: MapComponent},
  {path: 'table', component: TableComponent},
  {path: 'chart', component: ChartComponent},
  {path: 'kioskchart', component: KioskchartComponent},
  {path: 'productchart', component: ProductchartComponent},
  {path: 'sessionchart', component: SessionchartComponent},
  {path: 'adchart', component: AdchartComponent},
  {path: 'kiosktable', component: KiosktableComponent},
  {path: 'producttable', component: ProducttableComponent},
  {path: 'sessiontable', component: SessiontableComponent},
  {path: 'adtable', component: AdtableComponent},
  {path: 'dash', component: DashComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    TableComponent,
    NavComponent,
    MapComponent,
    KioskchartComponent,
    ProductchartComponent,
    SessionchartComponent,
    AdchartComponent,
    KiosktableComponent,
    ProducttableComponent,
    AdtableComponent,
    SessiontableComponent,
    DashComponent
  ],
  imports: [
    BrowserModule,
    NgZorroAntdModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(routeConfig),
    HttpClientModule, FormsModule

  ],
  providers: [FileService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {
}
