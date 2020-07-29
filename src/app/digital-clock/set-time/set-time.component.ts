import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-set-time',
  templateUrl: './set-time.component.html',
  styleUrls: ['./set-time.component.scss']
})
export class SetTimeComponent {
  hoursOne:number = 0;
  hoursTwo:number = 0;
  minutesOne:number = 0;
  minutesTwo:number = 0;
  alarmHours:number = 0;
  alarmMinutes:number = 0;
  
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
