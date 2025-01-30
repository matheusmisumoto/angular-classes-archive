import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';
import { TimerService } from '../timer.service';

// importa o array com os discos
import { discs } from '../discs';

// importa o recurso de manipular parâmetros na rota (URL)
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'app-disc-details',
    templateUrl: './disc-details.component.html',
    styleUrls: ['./disc-details.component.css'],
    standalone: false
})

export class DiscDetailsComponent implements OnInit {
  // Define variável de exibição de informações relacionadas a um único disco
  disc: any;
  
  // private route: ActivatedRoute = permite a obtenção de parâmetro no recurso importado
  constructor(private route: ActivatedRoute, public logger: LoggerService, public timer: TimerService) {
    this.logger.add("DiscDetailsComponent constructed");
  }

  ngOnInit() {

    // seleciona o disco ligado ao índice passado na rota (URL)
    this.route.paramMap.subscribe(params => {
      this.disc = discs[+params.get('id')!];
    }
    );

    this.logger.add("DiscDetailsComponent initialized");
  }

}
