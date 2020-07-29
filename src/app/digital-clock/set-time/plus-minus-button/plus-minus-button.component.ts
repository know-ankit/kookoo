import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-plus-minus-button',
  templateUrl: './plus-minus-button.component.html',
  styleUrls: ['./plus-minus-button.component.scss']
})
export class PlusMinusButtonComponent   {
  @Input() hoursOne:number;
  @Input() hoursTwo:number;
  @Input() minutesOne:number;
  @Input() minutesTwo:number;
  counter:number = 0;
  alarmHours:number = 0;
  alarmMinutes:number = 0;

 @Output() eventHourOne = new EventEmitter();
 @Output() eventHourTwo = new EventEmitter();
 @Output() eventMinuteOne = new EventEmitter();
 @Output() eventMinuteTwo = new EventEmitter();
 

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
    
    const hourValueOne=Math.floor(this.alarmHours/10);
    this.hoursOne = hourValueOne;
    this.eventHourOne.emit(hourValueOne);
    
    const hourValueTwo=this.alarmHours%10;
    this.hoursTwo = hourValueTwo;
    this.eventHourTwo.emit(hourValueTwo);
    
    const minuteValueOne = Math.floor(this.alarmMinutes/10);
    this.minutesOne = minuteValueOne;
    this.eventMinuteOne.emit(minuteValueOne);
    
    const minuteValueTwo=this.alarmMinutes%10;
    this.minutesTwo = minuteValueTwo;
    this.eventMinuteTwo.emit(minuteValueTwo);

    
  }
}
