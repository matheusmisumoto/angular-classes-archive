import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';
import { TasksService } from '../tasks.service';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css'],
    standalone: false
})
export class TaskListComponent implements OnInit {

  task!: string;

  constructor(private logger: LoggerService, public tasks: TasksService) {
    this.logger.add('TaskListComponent constructed');
  }

  ngOnInit(): void {
    this.logger.add('TaskListComponent initialized');
  }

}
