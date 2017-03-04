import { Component, OnInit } from '@angular/core';

import {MdDialog} from '@angular/material';
import {CreateProductComponent} from './../create-product/create-product.component';
import {EditProductComponent} from './../edit-product/edit-product.component';

@Component({
  selector: 'app-inventory-menu',
  templateUrl: './inventory-menu.component.html',
  styleUrls: ['./inventory-menu.component.css']
})
export class InventoryMenuComponent implements OnInit {

  constructor(public dialog: MdDialog) {}

  openAddDialog() {
    this.dialog.open(CreateProductComponent);
  }
  openEditDialog() {
    this.dialog.open(EditProductComponent);
  }

  ngOnInit() {
  }

}
