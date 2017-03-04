import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organise-category',
  templateUrl: './organise-category.component.html',
  styleUrls: ['./organise-category.component.css']
})
export class OrganiseCategoryComponent implements OnInit {
category = [
    {value: 'cat-0', viewValue: 'Breakfast'},
    {value: 'cat-1', viewValue: 'Lunch'},
    {value: 'cat-2', viewValue: 'Dinner'}
  ];

  unit = [
    {value: 'unit-0', viewValue: 'Pc'},
    {value: 'unit-1', viewValue: 'Kg'},
    {value: 'unit-2', viewValue: 'Q'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
