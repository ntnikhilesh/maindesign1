import { Component, OnInit } from '@angular/core';

import {Weg} from './../models/weg';
import {WegService} from './../services/weg.service';

@Component({
  selector: 'app-billing-component',
  templateUrl: './billing-component.component.html',
  styleUrls: ['./billing-component.component.css']
})
export class BillingComponentComponent implements OnInit {
title='Billing';
weg:Weg[];

  constructor(private wegService:WegService) { }

  ngOnInit() {
  this.getWeg();
  }

  getWeg():void {
 this.wegService.getWeg().then(weg=>this.weg=weg);
 }

}
