import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import { Chart1Component } from './chart1/chart1.component';


const routeConfig: Routes = [
  {path: '', redirectTo: '/chart1', pathMatch: 'full'},
  {path: 'chart1', component: Chart1Component},
];


@NgModule({
  declarations: [
    AppComponent,
    Chart1Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    RouterModule.forRoot(routeConfig),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
