import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-time',
  templateUrl: './current-time.component.html',
  styleUrls: ['./current-time.component.scss']
})
export class CurrentTimeComponent implements OnInit {
  public hour: number;
  public minute: string;
  public second: string;
  public AMPM: string;
  secondValue:any;

 ngOnInit(): void {
    setInterval(()=> {
      const date = new Date();
      this.updateDate(date);
    }, 1000);
  }
  updateDate(date: Date) {
    const hours = date.getHours();
    this.AMPM = hours >= 12 ? 'PM': 'AM';
    this.hour = hours < 23 ?  hours : hours;
    
    const minutes = date.getMinutes();
    this.minute = minutes < 10 ? '0' + minutes : minutes.toString(); 

    const seconds = date.getSeconds();
    this.second = seconds < 10 ? '0' + seconds : seconds.toString();
  }
}
