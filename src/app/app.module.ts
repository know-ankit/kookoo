import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DigitalClockComponent } from './digital-clock/digital-clock.component';
import 'boxicons';
import { CurrentTimeComponent } from './current-time/current-time.component';
import { ButtonControlComponent } from './button-control/button-control.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DigitalClockComponent,
    CurrentTimeComponent,
    ButtonControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
