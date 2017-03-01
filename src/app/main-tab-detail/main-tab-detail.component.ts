import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';

@Component({
  selector: 'app-main-tab-detail',
  templateUrl: './main-tab-detail.component.html',
  styleUrls: ['./main-tab-detail.component.css']
})
export class MainTabDetailComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  goToDetail()
  {
  	this.router.navigate(['/help']);
  }

}
