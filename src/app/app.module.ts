import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TexnetD3Module } from 'texnet-d3-module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TexnetD3Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
