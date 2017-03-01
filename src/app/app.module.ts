import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { AppComponent } from './app.component';
import { BillDetailComponent } from './bill-detail/bill-detail.component';

import {WegService} from './services/weg.service';
//import { WegComponent } from './weg/weg.component';
import { HelpComponent } from './help/help.component';
import { SideNavDetailComponent } from './side-nav-detail/side-nav-detail.component';
import { MainTabDetailComponent } from './main-tab-detail/main-tab-detail.component';

import {RoutingModule} from './routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuDetailComponent } from './menu-detail/menu-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BillDetailComponent,
    //WegComponent,
    HelpComponent,
    SideNavDetailComponent,
    MainTabDetailComponent,
    HomePageComponent,
    DashboardComponent,
    MenuDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RoutingModule
  ],
  providers: [WegService],
  bootstrap: [AppComponent]
})
export class AppModule { }
