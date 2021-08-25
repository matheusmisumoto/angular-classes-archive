import { Component, OnInit } from '@angular/core';

// importa o array com os discos
import { discs } from '../discs';

@Component({
  selector: 'app-disc-list',
  templateUrl: './disc-list.component.html',
  styleUrls: ['./disc-list.component.css']
})
export class DiscListComponent implements OnInit {

  // define a variável que será usada para manipular o array com os discos
  list = discs;

  constructor() { }

  ngOnInit(): void {
  }

}
