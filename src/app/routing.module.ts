 import {NgModule} from '@angular/core';

 import {Routes, RouterModule} from '@angular/router';

 import {HelpComponent} from './help/help.component';

 import {MainTabDetailComponent} from './main-tab-detail/main-tab-detail.component';
 import {HomePageComponent} from './home-page/home-page.component';
 import {DashboardComponent} from './dashboard/dashboard.component';
 import {BillingComponentComponent} from './billing-component/billing-component.component';
 import {LoginComponent} from './login/login.component';

const routes:Routes=[

{path:'',redirectTo:'/dashboard',pathMatch:'full'},
{path:'dashboard',component:LoginComponent},
{path:'help',component:HelpComponent},
{path:'mainTab',component:MainTabDetailComponent},
{path:'home-page',component:HomePageComponent},
{path:'billing',component:BillingComponentComponent},

	

];

 @NgModule({
 imports:[RouterModule.forRoot(routes)],
 exports:[RouterModule]
 })

 export class RoutingModule{}