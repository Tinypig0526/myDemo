import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppComponent } from './app.component';
import { RouterModule, Routes} from '@angular/router';
import { Chart2Component} from './chart2/chart2.component';
import { Chart1Component } from './chart1/chart1.component';
import { Chart3Component } from './chart3/chart3.component';
import { Chart4Component } from './chart4/chart4.component';



const routeConfig: Routes = [
 /* {path: '', redirectTo: '/chart2', pathMatch: 'full'},*/
  {path: 'chart1', component: Chart1Component},
  {path: 'chart2', component: Chart2Component},
  {path: 'chart3', component: Chart3Component},
  {path: 'chart4', component: Chart4Component},
];


@NgModule({
  declarations: [
    AppComponent,
    Chart2Component,
    Chart1Component,
    Chart3Component,
    Chart4Component,
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
