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

  updateList: Array<PriceUpdate> = [];

  constructor(private http: HttpClient, private logger: LoggerService) {
    this.logger.add('BitcoinService constructed');
  }

  update(){
    this.http.get<Response>('https://api.coindesk.com/v1/bpi/currentprice.json').subscribe(
      data => {
        this.lastUpdate = new Date(),
        // Pega todos os dados, mas só salva os que foram declarados na interface Response
        this.currentPrice = data,
        this.updateList.push({
          timestamp: this.lastUpdate,
          USD: this.currentPrice.bpi.USD.rate_float,
          GBP: this.currentPrice.bpi.GBP.rate_float,
          EUR: this.currentPrice.bpi.EUR.rate_float,
        })
      }
    );
  }

}
