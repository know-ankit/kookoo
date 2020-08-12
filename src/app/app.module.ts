import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DigitalClockComponent } from './digital-clock/digital-clock.component';
import { CurrentTimeComponent } from './digital-clock/current-time/current-time.component';
import { ButtonControlComponent } from './digital-clock/set-time/button-control/button-control.component';
import { PlusMinusButtonComponent } from './digital-clock/set-time/plus-minus-button/plus-minus-button.component';
import { SetTimeComponent } from './digital-clock/set-time/set-time.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DigitalClockComponent,
    CurrentTimeComponent,
    ButtonControlComponent,
    PlusMinusButtonComponent,
    SetTimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
