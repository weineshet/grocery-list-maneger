import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroceryComponent } from './app.grocery';


@NgModule({
  declarations: [GroceryComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule ],
  providers: [],
  bootstrap: [GroceryComponent]
})

export class AppModule {}
