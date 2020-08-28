import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-set-time',
  templateUrl: './set-time.component.html',
  styleUrls: ['./set-time.component.scss']
})
export class SetTimeComponent implements OnInit{
  hoursOne = 0; 
  hoursTwo = 0;
  minutesOne = 0;
  minutesTwo = 0;
  alarmHours = 0;
  alarmMinutes = 0;
  second: string;
  day: string;
  days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  date = new Date;
  
  ngOnInit(): void {
    this.day = this.days[this.date.getDay()];
  }
  
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
