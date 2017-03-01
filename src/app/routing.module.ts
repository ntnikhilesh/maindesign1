 import {NgModule} from '@angular/core';

 import {Routes, RouterModule} from '@angular/router';

 import {HelpComponent} from './help/help.component';

 import {MainTabDetailComponent} from './main-tab-detail/main-tab-detail.component';

const routes:Routes=[

{path:'',redirectTo:'/help',pathMatch:'full'},
{path:'help',component:HelpComponent},
{path:'mainTab',component:MainTabDetailComponent},
	

];

 @NgModule({
 imports:[RouterModule.forRoot(routes)],
 exports:[RouterModule]
 })

 export class RoutingModule{}