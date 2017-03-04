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

import { MainTabDetailComponent } from './main-tab-detail/main-tab-detail.component';

import {RoutingModule} from './routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuDetailComponent } from './menu-detail/menu-detail.component';
import { BillingComponentComponent } from './billing-component/billing-component.component';
import { LoginComponent } from './login/login.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ReportComponent } from './report/report.component';
import { SettingComponent } from './setting/setting.component';
import { SupportComponent } from './support/support.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { ExpandableListModule } from 'angular2-expandable-list';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { OrganiseCategoryComponent } from './organise-category/organise-category.component';
import { BillingMenuComponent } from './billing-menu/billing-menu.component';
import { InventoryMenuComponent } from './inventory-menu/inventory-menu.component';
import { ReportTableComponent } from './report-table/report-table.component';
import { ReportDetailTableComponent } from './report-detail-table/report-detail-table.component';
import { StoreInfoComponent } from './store-info/store-info.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { DeviceStatusComponent } from './device-status/device-status.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    BillDetailComponent,
    //WegComponent,
    HelpComponent,
    
    MainTabDetailComponent,
    HomePageComponent,
    DashboardComponent,
    MenuDetailComponent,
    BillingComponentComponent,
    LoginComponent,
    InventoryComponent,
    ReportComponent,
    SettingComponent,
    SupportComponent,
    InventoryListComponent,
    CreateProductComponent,
    EditProductComponent,
    OrganiseCategoryComponent,
    BillingMenuComponent,
    InventoryMenuComponent,
    ReportTableComponent,
    ReportDetailTableComponent,
    StoreInfoComponent,
    ContactInfoComponent,
    DeviceStatusComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RoutingModule,
    ExpandableListModule
  ],
  providers: [WegService],
  entryComponents: [CreateProductComponent,EditProductComponent,OrganiseCategoryComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
