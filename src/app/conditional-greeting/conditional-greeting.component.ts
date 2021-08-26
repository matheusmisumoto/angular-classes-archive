import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-conditional-greeting',
  templateUrl: './conditional-greeting.component.html',
  styleUrls: ['./conditional-greeting.component.css']
})
export class ConditionalGreetingComponent implements OnInit {

  timestamp = new Date();

  getHour(){
    return this.timestamp.getHours();
  }

  getGreeting(){
    if(this.getHour() >= 18){
      return "good evening";
    }
    else if(this.getHour() >= 12){
      return "good afternoon";
    }
    else if(this.getHour() >= 6){
      return "good morning";
    }
    else {
      return "go to sleep";
    }
  }

  constructor(public logger: LoggerService, public timer: TimerService) {
    this.logger.add("ConditionalGreetingComponent constructed");
  }

  ngOnInit(): void {
    this.logger.add("ConditionalGreetingComponent initialized");
  }

}
