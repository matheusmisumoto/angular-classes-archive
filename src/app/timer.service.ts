import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private timer: any;
  private counter = 0;

  constructor(private logger: LoggerService) { 
    this.logger.add('TimerService constructed');
  }

  start(ms: number){
    if(!this.timer){
      this.timer = setInterval(
        () => {
          this.counter++;
        }, ms
      );
      this.logger.add('TimerService started');
    }
  }

  stop(){
    if(this.timer){
      clearInterval(this.timer);
      this.timer = null;
      this.logger.add("TimerService stopped");
    }
  }

  getCount(){
    return this.counter;
  }
}
