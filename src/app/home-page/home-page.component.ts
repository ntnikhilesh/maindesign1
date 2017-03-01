import { Component, OnInit } from '@angular/core';

import {Weg} from './../models/weg';
import {WegService} from './../services/weg.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
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
