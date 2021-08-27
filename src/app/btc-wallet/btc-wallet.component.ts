import { Component, OnInit } from '@angular/core';
import { BitcoinService } from '../bitcoin.service';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-btc-wallet',
  templateUrl: './btc-wallet.component.html',
  styleUrls: ['./btc-wallet.component.css']
})
export class BtcWalletComponent implements OnInit {

  operation: string;
  btc: number;
  rate: number;

  constructor(public bitcoin: BitcoinService, public logger: LoggerService) {
    this.btc = 0;
    this.operation = "buy";
    this.rate = this.bitcoin.currentPrice.bpi.USD.rate_float;

    this.logger.add("BtcWalletComponent constructed");
  }

  ngOnInit(): void {
  }

  updateBalance() {
    if (this.operation == "buy") {
      this.bitcoin.balance = this.bitcoin.balance + this.btc;
    } else if (this.operation == "sell") {
      this.bitcoin.balance = this.bitcoin.balance - this.btc;
    }
  }

  getBalanceUSD() {
    return this.bitcoin.balance * this.rate;
  }

  getExchange() {
    return this.btc * this.rate;
  }
}
