import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';
import { TimerService } from '../timer.service';

@Component({
    selector: 'app-multiplication-table',
    templateUrl: './multiplication-table.component.html',
    styleUrls: ['./multiplication-table.component.css'],
    standalone: false
})
export class MultiplicationTableComponent implements OnInit {

  // variável 'n' do ngModel do input
  n: number;

  constructor(public logger: LoggerService, public timer: TimerService) {
    // define valor inicial 
    this.n = 2;

    this.logger.add("MultiplicationTableComponent constructed");
  }

  ngOnInit(): void {
    this.logger.add("MultiplicationTableComponent initialized");
  }

}
