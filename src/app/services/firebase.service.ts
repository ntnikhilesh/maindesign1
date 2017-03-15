import { Injectable } from '@angular/core';

import {AngularFire, FirebaseListObservable,FirebaseObjectObservable,AuthProviders, AuthMethods,} from 'angularfire2';

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

   


    getafoListings()
    {
       this.olistings=this.afo.database.list('/listings') as AfoListObservable<Listing[]>
        return this.olistings

    }





    getoListingDetails(id)
    {

        this.olisting=this.afo.database.object('/listings/'+id) as AfoObjectObservable<Listing>


        return this.olisting;

    }






  

    updateOffImageURL(id,url)
    {
      //console.log(id+"and "+url);
      const itemObservable = this.af.database.object('/listings/'+id);
      itemObservable.update({ imageUrl: url });
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
           listing.imageUrl='CC';
           console.log('offline adding');
           return this.olistings.push(listing);

        }); 

      } 

  }







// Start email/pass auth

  /**
   * Calls the AngularFire2 service to register a new user
   * @param model
   * @returns {firebase.Promise<void>}
   */
  registerUser(email, password) {
    console.log(email)
    return this.af.auth.createUser({
      email: email,
      password: password
    });
  }




  /**
   * Saves information to display to screen when user is logged in
   * @param uid
   * @param model
   * @returns {firebase.Promise<void>}
   */
  saveUserInfoFromForm(uid, name, email) {
    return this.af.database.object('registeredUsers/' + uid).set({
      name: name,
      email: email,
    });
    }





    /**
   * Logs the user in using their Email/Password combo
   * @param email
   * @param password
   * @returns {firebase.Promise<FirebaseAuthState>}
   */
  loginWithEmail(email, password) {
    return this.af.auth.login({
        email: email,
        password: password,
      },
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password,
      });
  }



  //end email/pass auth





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
