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

    listing:any;
  	imageUrl:any;





  constructor(private firebaseService:FirebaseService,
  ) {
    
  }

  ngOnInit() {
  this.firebaseService.getafoListings().subscribe(listings=>{
  //console.log();
  

  this.olistings=listings;


  //Get image


  for (let listing of this.olistings) {
    //console.log(listing.$key);

    this.firebaseService.getoListingDetails(listing.$key).subscribe(listing=>
    {
      this.listing=listing;
      

      //console.log(listing);  

      
      let storageRef=firebase.storage().ref();
      let spaceRef=storageRef.child(this.listing.path);

      storageRef.child(this.listing.path).getDownloadURL().then((url)=>
      {
        //console.log(url);
        this.imageUrl=url;
        //console.log(this.imageUrl[i]);
     
      
      }).catch((error)=>
      {
        console.log(error);
      });

    });
     
}
 


// End get image

  }); 


  


  }


  
}
