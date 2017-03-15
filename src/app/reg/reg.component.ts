import { Component, OnInit } from '@angular/core';

import {FirebaseService} from './../services/firebase.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent {

  public error: any;
  constructor(private afService: FirebaseService, private router: Router) { }
	//registers the user and logs them in
  register(event, name, email, password) {
    event.preventDefault();
    this.afService.registerUser(email, password).then((user) => {
      this.afService.saveUserInfoFromForm(user.uid, name, email).then(() => {
        this.router.navigate(['billing']);
      })
        .catch((error) => {
          this.error = error;
        });
    })
      .catch((error) => {
        this.error = error;
        console.log(this.error);
      });
  }
}