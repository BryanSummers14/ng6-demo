import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DemoLibModule } from 'demo-lib';
import { LazyLoadDirective } from './lazy-load.directive';

@NgModule({
  declarations: [
    AppComponent,
    LazyLoadDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DemoLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
