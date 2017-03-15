import { Component, OnInit } from '@angular/core';

import { AfoListObservable, AngularFireOffline } from 'angularfire2-offline';
import {FirebaseService} from './../services/firebase.service';

import * as firebase from 'firebase';

import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-omain-tab-detail',
  templateUrl: './omain-tab-detail.component.html',
  styleUrls: ['./omain-tab-detail.component.css']
})
export class OmainTabDetailComponent implements OnInit {

  	
  	olistings:any;

    listing:any;
  	imageUrl:any;


  constructor(private firebaseService:FirebaseService,private localStorageService: LocalStorageService) { }

  ngOnInit() 
  {

    this.checkInternet();

    
    
    //this.submit('key1', 'val1');
    //this.getItem('key1'); 
      



      this.firebaseService.getafoListings().subscribe(listings=>{
      //console.log();
  
  
      this.olistings=listings;
      //console.log(this.olistings);


      //Update image URL


      for (let listing of this.olistings) 
      {
          //console.log(listing.$key);

          this.firebaseService.getoListingDetails(listing.$key).subscribe(listing=>
          {
            this.listing=listing;
      

            //console.log(listing.$key);  

      
            let storageRef=firebase.storage().ref();
            let spaceRef=storageRef.child(this.listing.path);

            storageRef.child(this.listing.path).getDownloadURL().then((url)=>
            {
              //console.log(url);
              this.imageUrl=url;
              //console.log(this.imageUrl);

              this.submit(listing.$key,url);
              this.firebaseService.updateOffImageURL(listing.$key,url);  
              this.getItem(listing.$key); 
      
            }).catch((error)=>
            {
                console.log(error);
            });

          });
     
      }
 


// End update image URL

  }); 


 



  }


      submit(key, val) 
      {
          return this.localStorageService.set(key, val);
      }

      getItem(key) 
      {
          //console.log(this.localStorageService.get(key));
          return this.localStorageService.get(key);
      }

      checkInternet()
      {
          console.log(navigator.onLine);

        }
      }