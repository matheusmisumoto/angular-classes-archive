import { Component } from '@angular/core';
import { TimerService } from './timer.service';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Classes Archive';
  
  constructor(public timer: TimerService, private logger: LoggerService){
    this.logger.add("AppComponent constructed");
    this.timer.start(1000);
  }
}
