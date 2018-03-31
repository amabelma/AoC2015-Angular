import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Day1MainComponent } from './Day1/day1-main/day1-main.component';


@NgModule({
  declarations: [
    AppComponent,
    Day1MainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
