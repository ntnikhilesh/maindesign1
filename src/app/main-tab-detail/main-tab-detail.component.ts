import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';

import {Weg} from './../models/weg';
import {WegService} from './../services/weg.service';

@Component({
  selector: 'app-main-tab-detail',
  templateUrl: './main-tab-detail.component.html',
  styleUrls: ['./main-tab-detail.component.css']
})
export class MainTabDetailComponent implements OnInit {
weg:Weg[];

  //Consume the service
  constructor(private wegService:WegService) { }

  ngOnInit() {
  this.getWeg();
  }

  getWeg():void {
 this.wegService.getWeg().then(weg=>this.weg=weg);
 }

}
