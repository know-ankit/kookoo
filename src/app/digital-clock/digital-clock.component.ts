import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.scss']
})
export class DigitalClockComponent implements OnInit {

  hoursOne:number = 0;
  hoursTwo:number = 0;
  minutesOne:number = 0;
  minutesTwo:number = 0;
  counter:number = 0;
  alarmHours:number = 0;
  alarmMinutes:number = 0;
  timeValue:any;

  
  constructor() { }
  
  ngOnInit(): void{

  }

  hourIncrement() {

    if(this.counter > 1 || this.counter == 0){
      this.alarmHours++;
      if (this.alarmHours > 23) this.alarmHours = 0;
      this.updateAlarmTime();
    }
    this.counter++;
  }
  
  hourDecrement() {

    if(this.counter > 1 || this.counter==0){
      this.alarmHours--;

      if (this.alarmHours < 0) this.alarmHours = 23;
      this.updateAlarmTime();
    }

    this.counter++;
  }

  minuteIncrement() {
    this.counter =0;

    if(this.counter > 1 || this.counter==0){
      this.alarmMinutes++;

      if (this.alarmMinutes > 59) this.alarmMinutes = 0;
      this.updateAlarmTime();
    }

    this.counter++;
  }

  minuteDecrement() {
    this.alarmMinutes--;

    if (this.alarmMinutes < 0) this.alarmMinutes = 59;
    this.updateAlarmTime();

  }
  
  updateAlarmTime() {
    
    this.timeValue=Math.floor(this.alarmHours/10);
    this.hoursOne = this.timeValue;
    const hourValue=this.alarmHours%10;
    this.hoursTwo = hourValue;
    
    const minuteValue = Math.floor(this.alarmMinutes/10);
    this.minutesOne = minuteValue;
    
    const timeValue=this.alarmMinutes%10;
    this.minutesTwo = this.alarmMinutes%10;

  }

}
