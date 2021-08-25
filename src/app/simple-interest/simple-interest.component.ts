import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-interest',
  templateUrl: './simple-interest.component.html',
  styleUrls: ['./simple-interest.component.css']
})
export class SimpleInterestComponent implements OnInit {
  c: number;
  i: number;
  t: number;

  constructor() {
    this.c = 1000;
    this.i = 0.10;
    this.t = 3;
  }

  ngOnInit() {
  }

  showMeTheMoney(){
    return this.c*(1+this.i*this.t);
  }

  getJuros(){
    return this.showMeTheMoney() - this.c;
  }
}
