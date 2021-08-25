import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compound-interest',
  templateUrl: './compound-interest.component.html',
  styleUrls: ['./compound-interest.component.css']
})
export class CompoundInterestComponent implements OnInit {
  c: number;
  i: number;
  t: number;

  constructor() {
    this.c = 1000;
    this.i = 0.10;
    this.t = 3;
  }

  showMeTheMoney(c: number,i: number,t: number){
    let result: number[] = [];
    for(let loop = 1; loop <= t; loop++){
      var juros = c*(1+i)**loop;
      result.push(juros);
    }
    return result;
  }

  ngOnInit() {
  }

}
