import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-github-repositories',
  templateUrl: './github-repositories.component.html',
  styleUrls: ['./github-repositories.component.css']
})
export class GithubRepositoriesComponent implements OnInit {

  constructor(public github: GithubService) { }

  ngOnInit(): void {
    this.github.getRepository();
  }

  getRepositories() {
    return this.github.dados;
  }

  update() {
    this.github.getRepository();
  }

}
