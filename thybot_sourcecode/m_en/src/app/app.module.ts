import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SystemComponent } from './system/system.component';
import { TechComponent } from './tech/tech.component';
import { SolutionComponent } from './solution/solution.component';
import { ChannelComponent } from './channel/channel.component';
import { ProductComponent } from './product/product.component';
import { ServeComponent } from './serve/serve.component';
import { CaseComponent } from './case/case.component';
import { AboutComponent } from './about/about.component';
import { BottomComponent } from './bottom/bottom.component';
import { StarsComponent } from './stars/stars.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {HttpModule} from "@angular/http";
import {ControlService} from "./control.service";


const routeConfig: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'system', component: SystemComponent},
  {path: 'tech', component: TechComponent},
  {path: 'solution', component: SolutionComponent},
  {path: 'channel', component: ChannelComponent},
  {path: 'about', component: AboutComponent},
  {path: 'case', component: CaseComponent},
  {path: 'product', component: ProductComponent},
  {path: 'serve', component: ServeComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SystemComponent,
    TechComponent,
    SolutionComponent,
    ChannelComponent,
    ProductComponent,
    ServeComponent,
    CaseComponent,
    AboutComponent,
    BottomComponent,
    StarsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig),
    FormsModule,
    HttpModule,
  ],
  providers: [ ControlService, { provide: LocationStrategy, useClass: HashLocationStrategy, }],
  bootstrap: [AppComponent]
})
export class AppModule { }
