import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { HttpModule} from '@angular/http';
import { FormsModule} from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import {SelectModule} from 'ng2-select';
// module
import {KioskdataService} from './kioskdata.service';
import {RobotService} from './robot.service';
import {PayService} from './pay.service';
// service
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HelpComponent} from './help/help.component';
import { AboutComponent} from './about/about.component';
import { ProcessComponent} from './process/process.component';
import { HomeComponent } from './home/home.component';
import { RoutebtnComponent } from './routebtn/routebtn.component';
import { BannerComponent } from './banner/banner.component';
import { ProdlistComponent } from './prodlist/prodlist.component';
import { ControltestComponent } from './controltest/controltest.component';
import { ControllayoutComponent } from './controllayout/controllayout.component';
import { ControlinoutComponent } from './controlinout/controlinout.component';
// component
import { QRCodeModule } from 'angular2-qrcode';




import {VirtualKeyboardDirective} from './directive/virtual-keyboard.directive';
import {TimeService} from "./time.service";


const routeConfig: Routes = [
  {path: '' , redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'help', component: HelpComponent},
  {path: 'process', component: ProcessComponent},
  {path: 'test', component: ControltestComponent},
  {path: 'inout', component: ControlinoutComponent},
  {path: 'layout', component: ControllayoutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HelpComponent,
    AboutComponent,
    ProcessComponent,
    HomeComponent,
    RoutebtnComponent,
    BannerComponent,
    ProdlistComponent,
    ControltestComponent,
    ControllayoutComponent,
    ControlinoutComponent,
    VirtualKeyboardDirective


  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig),
    HttpModule,
    FormsModule,
    QRCodeModule,
    SelectModule
  ],
  providers: [KioskdataService, RobotService, PayService,TimeService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
