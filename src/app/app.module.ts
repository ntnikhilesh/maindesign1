import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { AppComponent } from './app.component';
import { WegDetailComponent } from './weg-detail/weg-detail.component';

import {WegService} from './services/weg.service';

@NgModule({
  declarations: [
    AppComponent,
    WegDetailComponent
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
