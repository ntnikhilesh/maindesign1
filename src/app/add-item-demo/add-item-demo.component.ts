import { Component, OnInit } from '@angular/core';

import {FirebaseService} from './../services/firebase.service';
import {Router} from '@angular/router';

import {AngularFire, FirebaseListObservable,FirebaseObjectObservable} from 'angularfire2';

import * as firebase from 'firebase';

@Component({
  selector: 'app-add-item-demo',
  templateUrl: './add-item-demo.component.html',
  styleUrls: ['./add-item-demo.component.css']
})
export class AddItemDemoComponent implements OnInit {

   //price:any;
printname:any;
image:any;

path:any;
price:any;
name:any;
category:any;
unit:any;



  constructor(
private firebaseService:FirebaseService,
private router:Router
  ) { }

  ngOnInit() {
  }

  onAddSubmit()
  {

    


  		console.log('offline adding');

  		//console.log(this.title);


  		let listing=
  		{

  			name:this.name,
  			printname:this.printname,
  			
  			//price:this.price,
  			price:this.price,
  			category:this.category,
  			unit:this.unit
  		}
  		
  		console.log(listing);
  	this.firebaseService.oaddListing(listing); 
  	this.router.navigate(['inventory']);

  }

}
