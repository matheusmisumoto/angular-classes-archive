import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';
import { TimerService } from '../timer.service';

// importa o array com os discos
import { discs } from '../discs';

@Component({
    selector: 'app-disc-list',
    templateUrl: './disc-list.component.html',
    styleUrls: ['./disc-list.component.css'],
    standalone: false
})
export class DiscListComponent implements OnInit {

  // define a variável que será usada para manipular o array com os discos
  list = discs;

  constructor(public logger: LoggerService, public timer: TimerService) {
    this.logger.add("DiscListComponent constructed");
  }

  ngOnInit(): void {
    this.logger.add("DiscListComponent initialized");
  }

}
