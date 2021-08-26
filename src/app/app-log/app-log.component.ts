import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-app-log',
  templateUrl: './app-log.component.html',
  styleUrls: ['./app-log.component.css']
})
export class AppLogComponent implements OnInit {

  constructor(public logger: LoggerService, public timer: TimerService) {
    this.logger.add("AppLogComponent constructed");
  }

  ngOnInit(): void {
    this.logger.add("AppLogComponent initialized");
  }

}
