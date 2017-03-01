 import {NgModule} from '@angular/core';

 import {Routes, RouterModule} from '@angular/router';

 import {HelpComponent} from './help/help.component';

 import {MainTabDetailComponent} from './main-tab-detail/main-tab-detail.component';
 import {HomePageComponent} from './home-page/home-page.component';
 import {DashboardComponent} from './dashboard/dashboard.component';

const routes:Routes=[

{path:'',redirectTo:'/dashboard',pathMatch:'full'},
{path:'dashboard',component:HomePageComponent},
{path:'help',component:HelpComponent},
{path:'mainTab',component:MainTabDetailComponent},
{path:'home-page',component:HomePageComponent},

	

];

 @NgModule({
 imports:[RouterModule.forRoot(routes)],
 exports:[RouterModule]
 })

 export class RoutingModule{}