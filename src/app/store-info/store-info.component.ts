import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-info',
  templateUrl: './store-info.component.html',
  styleUrls: ['./store-info.component.css']
})
export class StoreInfoComponent implements OnInit {
states = [
    {value: 'cat-0', viewValue: 'Karnataka'},
    {value: 'cat-1', viewValue: 'Delhi'},
    {value: 'cat-2', viewValue: 'Maharashtra'}
  ];
  cities = [
    {value: 'cat-0', viewValue: 'Bangalore'},
    {value: 'cat-1', viewValue: 'Delhi'},
    {value: 'cat-2', viewValue: 'Mumbai'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
