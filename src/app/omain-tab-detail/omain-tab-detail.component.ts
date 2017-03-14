import { Component, OnInit } from '@angular/core';

import { AfoListObservable, AngularFireOffline } from 'angularfire2-offline';
import {FirebaseService} from './../services/firebase.service';

import * as firebase from 'firebase';

@Component({
  selector: 'app-omain-tab-detail',
  templateUrl: './omain-tab-detail.component.html',
  styleUrls: ['./omain-tab-detail.component.css']
})
export class OmainTabDetailComponent implements OnInit {

  	
  	olistings:any;
  	imageUrl:any;

  constructor(private firebaseService:FirebaseService) { }

  ngOnInit() {
  this.firebaseService.getafoListings().subscribe(listings=>{
  //console.log();
  
  this.getImage();
  this.olistings=listings;
  //console.log(key);
  }); 


  //get image URL



  }


  getImage()
  {
  console.log('your image path');




  }
}
