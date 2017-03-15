import { Component, OnInit } from '@angular/core';

import {AngularFire} from 'angularfire2';

import {FirebaseService} from './../services/firebase.service';
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

/*

    constructor(public af:AngularFire) { }

  ngOnInit() {
  }

login()
{
        this.af.auth.login();
}

loginFB()
{
		console.log('FB login');
        //this.af.auth.login();
}

logout()
{
        this.af.auth.logout();
        console.log('Logout succ..');
}  

*/




public error: any;
  constructor(public afService: FirebaseService, private router: Router) {}
 
  loginWithEmail(event, email, password){
    event.preventDefault();
    this.afService.loginWithEmail(email, password).then(() => {
      this.router.navigate(['billing']);
    })
      .catch((error: any) => {
        if (error) {
          this.error = error;
          console.log(this.error);
        }
      });
  }
}


