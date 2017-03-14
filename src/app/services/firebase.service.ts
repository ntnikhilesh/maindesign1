import { Injectable } from '@angular/core';

import {AngularFire, FirebaseListObservable,FirebaseObjectObservable} from 'angularfire2';

import { AfoListObservable,AfoObjectObservable, AngularFireOffline } from 'angularfire2-offline';

import * as firebase from 'firebase';

@Injectable()
export class FirebaseService 
{
    listings:FirebaseListObservable<any[]>;
    olistings:AfoListObservable<any[]>;

    listing:FirebaseObjectObservable<any[]>;
    olisting:AfoObjectObservable<any>;

    folder:any;
    num:number;

    constructor(private af:AngularFire,
    private afo: AngularFireOffline) 
    { 
        this.folder='listingimages';
    }

    getListings()
    {
      this.listings=this.af.database.list('/listings') as FirebaseListObservable<Listing[]>
      return this.listings;
    }


    getafoListings()
    {
       this.olistings=this.afo.database.list('/listings') as AfoListObservable<Listing[]>
       console.log('data '+this.olistings);
        return this.olistings

    }





    getoListingDetails(id)
    {

        this.olisting=this.afo.database.object('/listings/'+id) as AfoObjectObservable<Listing>


        return this.olisting;

    }






    getListingDetails(id)
    {

        this.listing=this.af.database.object('/listings/'+id) as FirebaseObjectObservable<Listing>


        return this.listing;

    }

    updateListing(id)
    {
      console.log(id);
      const itemObservable = this.af.database.object('/listings/'+id);
      itemObservable.update({ owner: 'CC' });
    }

    deleteListing(id)
    {
      console.log(id);
      const itemObservable = this.af.database.object('/listings/'+id);
      itemObservable.remove();
    }

    updateoListing(id)
    {
      console.log(id);
      const itemObservable = this.afo.database.object('/listings/'+id);
      itemObservable.update({ owner: 'CC-Offline' });
    }

    deleteoListing(id)
    {
      console.log('offline id from service '+id);
      const itemObservable = this.afo.database.object('/listings/'+id);
      itemObservable.remove();
    }


    addListing(listing)
    {
    console.log('online adding');

   


    
    //this.num=this.num+1;

  		//Create root ref

  		let storageRef=firebase.storage().ref();

  		for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]])
      {


  		  let path='/TD-images/'+Math.random();
  		  let iRef=storageRef.child(path);
  		  iRef.put(selectedFile).then((snapshot)=>
  		  {
  			   listing.image=selectedFile.name;
  			   listing.path=path;
  			   return this.listings.push(listing);

  		  }); 

      } 

  }

   oaddListing(listing)
    {

    
    
    //this.num=this.num+1;

      //Create root ref

      let storageRef=firebase.storage().ref();

      for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]])
      {


        let path='/TD-images/'+Math.random();
        let iRef=storageRef.child(path);
        iRef.put(selectedFile).then((snapshot)=>
        {
           listing.image=selectedFile.name;
           listing.path=path;
           listing.imgaeUrl='url';
           console.log('offline adding');
           return this.olistings.push(listing);

        }); 

      } 

  }









}

interface Listing
{
	$key?:string;
	name?:string;
	category?:string;
	unit?:string;
	image?:string;
	printname?:string;
	
	price?:string;


}
