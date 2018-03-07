import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppComponent } from './app.component';
import { SolutionComponent } from './solution/solution.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { CaseComponent } from './case/case.component';
import { ServeComponent } from './serve/serve.component';
import { AboutComponent } from './about/about.component';
import {RouterModule, Routes} from '@angular/router';
import { BottomComponent } from './bottom/bottom.component';
import {DownloadComponent} from './download/download.component';
import {DocumentComponent} from './document/document.component';
import {ControlService} from './control.service';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {HttpModule} from "@angular/http";


const routeConfig: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  {path: 'case', component: CaseComponent},
  {path: 'home', component: HomeComponent},
  {path: 'product', component: ProductComponent},
  {path: 'serve', component: ServeComponent},
  {path: 'solution', component: SolutionComponent},
  {path: 'download', component: DownloadComponent},
  {path: 'document', component: DocumentComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    SolutionComponent,
    HomeComponent,
    ProductComponent,
    CaseComponent,
    ServeComponent,
    AboutComponent,
    BottomComponent,
    DownloadComponent,
    DocumentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    RouterModule.forRoot(routeConfig),
    HttpModule,
  ],
  providers: [
    ControlService,{ provide: LocationStrategy, useClass: HashLocationStrategy, }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
