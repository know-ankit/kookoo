import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.scss']
})
export class DigitalClockComponent implements OnInit {
  public hour: number;
  public minute: string;
  public second: string;
  public AMPM: string;
  counter:number = 0;
  alarmHours:number = 0;
  alarmMinutes:number = 0;
  hoursOne:number = 0;
  hoursTwo:number = 0;
  minutesOne:number = 0;
  minutesTwo:number = 0;
  timeValue:any;
  alarmActive = false;
  IsAlarmSet:boolean = true;
  checkAlarmInterval: any;
  soundPlaying:boolean = false;
  audio = new Audio('./assets/Alarm-ringtone1.mp3');
  
  constructor() { }
  
  ngOnInit(): void {
    setInterval(()=> {
      const date = new Date();
      this.updateDate(date);
    }, 1000);
    
}

  private updateDate(date:Date) {
    const hours = date.getHours();
    this.AMPM = hours >= 12 ? 'PM': 'AM';
    this.hour = hours < 23 ?  hours : hours;

    const minutes = date.getMinutes();
    this.minute = minutes < 10 ? '0' + minutes : minutes.toString(); 

    const seconds = date.getSeconds();
    this.second = seconds < 10 ? '0' + seconds : seconds.toString();
  }
  
  hourIncrement(){
    if(this.counter > 1 || this.counter == 0){
      this.alarmHours++;
      if (this.alarmHours > 23) this.alarmHours = 0;
      this.updateAlarmTime();
    }
    this.counter++;
  }


  hourDecrement(){
    if(this.counter > 1 || this.counter==0){
      this.alarmHours--;

      if (this.alarmHours < 0) this.alarmHours = 23;
      this.updateAlarmTime();
    }

    this.counter++;
  }

  minuteIncrement(){
    this.counter =0;

    if(this.counter > 1 || this.counter==0){
      this.alarmMinutes++;

      if (this.alarmMinutes > 59) this.alarmMinutes = 0;
      this.updateAlarmTime();
    }

    this.counter++;
  }

  minuteDecrement(){
    this.alarmMinutes--;

    if (this.alarmMinutes < 0) this.alarmMinutes = 59;
    this.updateAlarmTime();

  }
  
  updateAlarmTime() {
    
    this.timeValue=Math.floor(this.alarmHours/10);
    this.hoursOne = this.timeValue;
    const hourValue=this.alarmHours%10;
    this.hoursTwo = hourValue;
    
    else $('#hours_two');
    const minuteValue = Math.floor(this.alarmMinutes/10);
    this.minutesOne = minuteValue;
    
   const timeValue=this.alarmMinutes%10;
   this.minutesTwo = this.alarmMinutes%10;

  }

  setAlarm() {
    this.IsAlarmSet = false;
    this.checkAlarmInterval = setInterval(()=> {
      this.alarmInterval() }, 1000);
    
  }

  startAudio() {
    this.alarmActive = true;

    if(!this.soundPlaying){
      this.audio.load();
      this.audio.play();
      this.soundPlaying = true;
    }

  }

  stopAudio() {
    this.alarmActive = false;

    if(this.soundPlaying){
      this.audio.pause();
      this.audio.currentTime = 0;
      this.soundPlaying = false;
    }
  }
  alarmInterval(){
    var checkTime = new Date();
	  var hours = checkTime.getHours();
	  var minutes = checkTime.getMinutes();
    
	  if ((hours == this.alarmHours) && (minutes == this.alarmMinutes)){
      this.IsAlarmSet = true;
      this.startAudio();
      this.alarmActive = true;
      clearInterval(this.checkAlarmInterval);
	}
  }

  setAlarmStatus(){
    this.IsAlarmSet = false;
    this.alarmActive = false;
  }
}
