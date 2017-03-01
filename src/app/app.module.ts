import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { AppComponent } from './app.component';
import { BillDetailComponent } from './bill-detail/bill-detail.component';

import {WegService} from './services/weg.service';

@NgModule({
  declarations: [
    AppComponent,
    BillDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [WegService],
  bootstrap: [AppComponent]
})
export class AppModule { }
