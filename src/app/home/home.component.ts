import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';
import { TimerService } from '../timer.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: false
})
export class HomeComponent implements OnInit {

  constructor(public logger: LoggerService, public timer: TimerService) {
    this.logger.add("HomeComponent constructed");
  }

  ngOnInit(): void {
    this.logger.add("HomeComponent initialized");
  }


}
