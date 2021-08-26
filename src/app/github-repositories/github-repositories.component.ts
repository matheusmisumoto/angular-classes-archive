import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { LoggerService } from '../logger.service';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-github-repositories',
  templateUrl: './github-repositories.component.html',
  styleUrls: ['./github-repositories.component.css']
})
export class GithubRepositoriesComponent implements OnInit {

  constructor(public github: GithubService, public logger: LoggerService, public timer: TimerService) {
    this.logger.add("GithubRepositoriesComponent constructed");
  }

  ngOnInit(): void {
    this.github.getRepository();

    this.logger.add("GithubRepositoriesComponent initialized");
  }

  getRepositories() {
    return this.github.dados;
  }

  update() {
    this.github.getRepository();
  }

}
