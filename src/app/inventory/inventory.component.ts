import { Component, OnInit } from '@angular/core';

import {MdDialog} from '@angular/material';
import {CreateProductComponent} from './../create-product/create-product.component';




@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
title='Inventory';

  constructor(public dialog: MdDialog) {}

  openDialog() {
    this.dialog.open(CreateProductComponent);
  }

  ngOnInit() {
  }

}
