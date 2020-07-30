import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-set-time',
  templateUrl: './set-time.component.html',
  styleUrls: ['./set-time.component.scss']
})
export class SetTimeComponent {
  hoursOne = 0; 
  hoursTwo = 0;
  minutesOne = 0;
  minutesTwo = 0;
  alarmHours = 0;
  alarmMinutes = 0;
  
  updateHourOne(number) {

    this.hoursOne = number;
  }

  updateHourTwo(number) {
    
    this.hoursTwo = number;
  }

  updateMinuteOne(number) {
    
    this.minutesOne = number;
  }

  updateMinuteTwo(number) {
    
    this.minutesTwo = number;
  }
}
