import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
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
