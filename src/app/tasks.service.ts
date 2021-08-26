import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

// Tipificação
interface Task {
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  list: Array<Task> = [];

  constructor(private logger: LoggerService) {
    this.logger.add('TasksService constructed');
  }

  getList(){
    return this.list;
  }

  add(title: string){
    this.list.push({title});
  }

  remove(index: number){
    this.list.splice(index, 1);
  }
}
