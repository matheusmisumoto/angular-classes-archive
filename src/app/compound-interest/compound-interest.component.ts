import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';
import { TimerService } from '../timer.service';

@Component({
    selector: 'app-compound-interest',
    templateUrl: './compound-interest.component.html',
    styleUrls: ['./compound-interest.component.css'],
    standalone: false
})
export class CompoundInterestComponent implements OnInit {
  c: number;
  i: number;
  t: number;

  constructor(public logger: LoggerService, public timer: TimerService) {
    this.c = 1000;
    this.i = 0.10;
    this.t = 3;

    this.logger.add("CompoundInterestComponent constructed");
  }

  showMeTheMoney(c: number,i: number,t: number){
    let result: number[] = [];
    for(let loop = 1; loop <= t; loop++){
      var juros = c*(1+i)**loop;
      result.push(juros);
    }
    return result;
  }

  ngOnInit(): void {
    this.logger.add("CompoundInterestComponent initialized");
  }

}
