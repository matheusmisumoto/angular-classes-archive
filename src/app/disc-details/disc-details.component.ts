import { Component, OnInit } from '@angular/core';

// importa o array com os discos
import { discs } from '../discs';

// importa o recurso de manipular parâmetros na rota (URL)
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-disc-details',
  templateUrl: './disc-details.component.html',
  styleUrls: ['./disc-details.component.css']
})

export class DiscDetailsComponent implements OnInit {
  // Define variável de exibição de informações relacionadas a um único disco
  disc: any;
  
  // private route: ActivatedRoute = permite a obtenção de parâmetro no recurso importado
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    // seleciona o disco ligado ao índice passado na rota (URL)
    this.route.paramMap.subscribe(params => {
      this.disc = discs[+params.get('id')!];
    }
    );
  }

}
