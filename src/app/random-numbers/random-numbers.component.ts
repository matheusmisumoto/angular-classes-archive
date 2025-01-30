import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';
import { TimerService } from '../timer.service';

@Component({
    selector: 'app-random',
    templateUrl: './random-numbers.component.html',
    styleUrls: ['./random-numbers.component.css'],
    standalone: false
})
export class RandomNumbersComponent implements OnInit {
  randomList: number[] = [];

  getRandomNumber(){
    return Math.round(50*Math.random());
  }

  getRandomNumberList(){
    this.randomList.push(this.getRandomNumber());
    this.randomList.push(this.getRandomNumber());
    this.randomList.push(this.getRandomNumber());
    this.randomList.push(this.getRandomNumber());
    this.randomList.push(this.getRandomNumber());
    this.randomList.push(this.getRandomNumber());
    return this.randomList;
  }

  constructor(public logger: LoggerService, public timer: TimerService) {
    this.logger.add("RandomNumbersComponent constructed");
  }

  ngOnInit(): void {
    this.getRandomNumberList();
    this.logger.add("RandomNumbersComponent initialized");
  }

}