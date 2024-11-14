import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  messages: string[] = [];

  constructor() { 
    this.add('LoggerService constructed');
  }

  add(message: string){
    this.messages.push(message + ' at ' + new Date().toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "short",
      hour12: false
    }));
  }

  clear(){
    this.messages = [];
  }
}
