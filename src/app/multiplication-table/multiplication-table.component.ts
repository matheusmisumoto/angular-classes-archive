import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiplication-table',
  templateUrl: './multiplication-table.component.html',
  styleUrls: ['./multiplication-table.component.css']
})
export class MultiplicationTableComponent implements OnInit {

  // variável 'n' do ngModel do input
  n: number;

  constructor() {
    // define valor inicial 
    this.n = 2;
  }

  ngOnInit(): void {
  }

}
