import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
category = [
    {value: 'cat-0', viewValue: 'Category 1'},
    {value: 'cat-1', viewValue: 'Category 2'},
    {value: 'cat-2', viewValue: 'Category 3'}
  ];

  unit = [
    {value: 'unit-0', viewValue: 'Select'},
    {value: 'unit-1', viewValue: 'Kg'},
    {value: 'unit-2', viewValue: 'Q'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
