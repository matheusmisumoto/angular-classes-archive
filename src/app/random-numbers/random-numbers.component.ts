import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-random',
  templateUrl: './random-numbers.component.html',
  styleUrls: ['./random-numbers.component.css']
})
export class RandomNumbersComponent implements OnInit {

  getRandomNumber(){
    return Math.round(50*Math.random());
  }

  getRandomNumberList(){
    let list: number[] = [];
    list.push(this.getRandomNumber());
    list.push(this.getRandomNumber());
    list.push(this.getRandomNumber());
    list.push(this.getRandomNumber());
    list.push(this.getRandomNumber());
    list.push(this.getRandomNumber());
    return list;
  }

  constructor(public logger: LoggerService, public timer: TimerService) {
    this.logger.add("RandomNumbersComponent constructed");
  }

  ngOnInit(): void {
    this.logger.add("RandomNumbersComponent initialized");
  }

}