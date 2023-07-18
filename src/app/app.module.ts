import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsdtoinrPipe } from './pipes/usdtoinr.pipe';
import { RedcolorsDirective } from './directives/redcolors.directive';


@NgModule({
  declarations: [
    AppComponent,
    UsdtoinrPipe,
    RedcolorsDirective,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
