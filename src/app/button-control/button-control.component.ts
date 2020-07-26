import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-control',
  templateUrl: './button-control.component.html',
  styleUrls: ['./button-control.component.scss']
})
export class ButtonControlComponent implements OnInit {

  
  @Input() alarmHours:number;
  @Input() alarmMinutes:number;
  alarmActive = false;
  IsAlarmSet:boolean = true;
  checkAlarmInterval: any;
  soundPlaying:boolean = false;
  audio = new Audio('./assets/Alarm-ringtone1.mp3');

  constructor() { }

  ngOnInit() {
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

  alarmInterval() {
    
    var checkTime = new Date();
	  var hours = checkTime.getHours();
    var minutes = checkTime.getMinutes();


	  if ((hours == this.alarmHours) && (minutes == this.alarmMinutes )){

      this.IsAlarmSet = true;
      this.startAudio();
      this.alarmActive = true;
      
      clearInterval(this.checkAlarmInterval);
    }
  }

  setAlarmStatus() {
    this.stopAudio();
    this.IsAlarmSet = true;
    this.alarmActive = false;
    
  }

}
