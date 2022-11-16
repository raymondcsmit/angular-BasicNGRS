import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { StoreModule } from '@ngrx/store';
import { SimpleReducer } from './store/simple.reducer';
import { CommonModule } from '@angular/common';



@NgModule({
  imports:      [ BrowserModule, FormsModule,CommonModule , StoreModule.forRoot({message:SimpleReducer}) ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
