import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { GooglePayButtonModule } from '@google-pay/button-angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    GooglePayButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
function appRoutes(appRoutes: any): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

