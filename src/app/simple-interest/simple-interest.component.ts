import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-simple-interest',
  templateUrl: './simple-interest.component.html',
  styleUrls: ['./simple-interest.component.css']
})
export class SimpleInterestComponent implements OnInit {
  c: number;
  i: number;
  t: number;

  constructor(public logger: LoggerService, public timer: TimerService) {
    this.c = 1000;
    this.i = 0.10;
    this.t = 3;

    this.logger.add("SimpleInterestComponent constructed");
  }

  ngOnInit(): void {
    this.logger.add("SimpleInterestComponent initialized");
  }

  showMeTheMoney(){
    return this.c*(1+this.i*this.t);
  }

  getJuros(){
    return this.showMeTheMoney() - this.c;
  }
}
