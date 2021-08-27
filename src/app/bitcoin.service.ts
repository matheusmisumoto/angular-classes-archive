import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoggerService } from './logger.service';

interface Response {
  time: {
    updated: string;
  };
  disclaimer: string;
  bpi: {
    [key in 'USD' | 'GBP' | 'EUR']: {
      symbol: string;
      description: string;
      rate_float: number;
      rate: string;
    }
  };
}

interface PriceUpdate {
  timestamp: Date;
  USD: number;
  GBP: number;
  EUR: number;
}

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  currentPrice!: Response;
  lastUpdate!: Date;
  latestRate!: number;
  delta!: number;

  // wallet
  balance: number;

  updateList: Array<PriceUpdate> = [];

  constructor(private http: HttpClient, private logger: LoggerService) {
    // wallet initial balance
    this.balance = 1;

    this.logger.add('BitcoinService constructed');
  }

  setDelta(){
    if(this.delta === undefined){
      this.delta = this.currentPrice.bpi.USD.rate_float;
    }
  }
  
  update(){
    this.http.get<Response>('https://api.coindesk.com/v1/bpi/currentprice.json').subscribe(
      data => {
        this.lastUpdate = new Date(),
        // Pega todos os dados, mas só salva os que foram declarados na interface Response
        this.currentPrice = data,
        this.latestRate = this.currentPrice.bpi.USD.rate_float;
        this.setDelta();
        this.updateList.push({
          timestamp: this.lastUpdate,
          USD: this.currentPrice.bpi.USD.rate_float,
          GBP: this.currentPrice.bpi.GBP.rate_float,
          EUR: this.currentPrice.bpi.EUR.rate_float
        })
      }
    );
  }
  
  compare(){
    if(this.latestRate > this.delta){
      return "going up";
    } else if(this.latestRate < this.delta){
      return "going down";
    } else {
      return "stable";
    }
  }

}
