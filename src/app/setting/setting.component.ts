import { Component, OnInit } from '@angular/core';
import {MdDialog} from '@angular/material';
import {CreateProductComponent} from './../create-product/create-product.component';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
title='Settings';

   constructor(public dialog: MdDialog) {}

  openDialog() {
    this.dialog.open(CreateProductComponent);
  }

  ngOnInit() {
  }

}
