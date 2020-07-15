import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.scss']
})
export class DigitalClockComponent implements OnInit {
  public hour: any;
  public minute: string;
  public second: string;
  public day: string;
  public AMPM: string;
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
    this.hour = hours % 12;
    this.hour = this.hour ? this.hour : 12;
    this.hour = this.hour < 10 ? '0' + this.hour : this.hour;

    const minutes = date.getMinutes();
    this.minute = minutes < 10 ? '0' + minutes : minutes.toString(); 

    const seconds = date.getSeconds();
    this.second = seconds < 10 ? '0' + seconds : seconds.toString();
  }

}
