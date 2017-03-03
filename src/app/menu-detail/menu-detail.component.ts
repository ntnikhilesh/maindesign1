import { Component, OnInit } from '@angular/core';

import {MdDialog} from '@angular/material';
import {CreateProductComponent} from './../create-product/create-product.component';
import {EditProductComponent} from './../edit-product/edit-product.component';

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.css']
})
export class MenuDetailComponent implements OnInit {

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
