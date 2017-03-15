import { Component, OnInit } from '@angular/core';

import {Weg} from './../models/weg';
import {WegService} from './../services/weg.service';

import {AngularFire} from 'angularfire2';

import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-billing-component',
  templateUrl: './billing-component.component.html',
  styleUrls: ['./billing-component.component.css']
})
export class BillingComponentComponent implements OnInit {
title='Billing';
weg:Weg[];

  constructor(private wegService:WegService,public af:AngularFire,private localStorageService: LocalStorageService) { }

  ngOnInit() {
  this.checkBrowser();
  this.getWeg();
  }

  getWeg():void {
 this.wegService.getWeg().then(weg=>this.weg=weg);
 }

 logout()
{
        this.af.auth.logout();
        console.log('Logout succ..');
}

checkBrowser()
{
  if(this.localStorageService.isSupported) {
  console.log('yes i support Local storage');
    //...
  }
}

}
