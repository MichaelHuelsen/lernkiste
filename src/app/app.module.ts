import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultiplicationComponent } from './multiplication/multiplication.component';
import { NumpadButtonComponent } from './numpad-button/numpad-button.component';
import { VersionComponent } from './version/version.component';

@NgModule({
  declarations: [
    AppComponent,
    MultiplicationComponent,
    NumpadButtonComponent,
    VersionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
