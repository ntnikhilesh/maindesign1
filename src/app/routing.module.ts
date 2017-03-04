 import {NgModule} from '@angular/core';

 import {Routes, RouterModule} from '@angular/router';

 

 import {MainTabDetailComponent} from './main-tab-detail/main-tab-detail.component';
 
 import {DashboardComponent} from './dashboard/dashboard.component';
 import {BillingComponentComponent} from './billing-component/billing-component.component';
 import {LoginComponent} from './login/login.component';
 import {InventoryComponent} from './inventory/inventory.component';
 import {ReportComponent} from './report/report.component';
 import {SettingComponent} from './setting/setting.component';
 import {SupportComponent} from './support/support.component';




const routes:Routes=[

{path:'',redirectTo:'/login',pathMatch:'full'},
{path:'login',component:LoginComponent},

{path:'mainTab',component:MainTabDetailComponent},

{path:'billing',component:BillingComponentComponent},
{path:'inventory',component:InventoryComponent},
{path:'report',component:ReportComponent},
{path:'settings',component:SettingComponent},
{path:'support',component:SupportComponent},

	

];

 @NgModule({
 imports:[RouterModule.forRoot(routes)],
 exports:[RouterModule]
 })

 export class RoutingModule{}