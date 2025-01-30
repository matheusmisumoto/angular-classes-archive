import { Component, OnInit } from '@angular/core';
import { BitcoinService } from '../bitcoin.service';
import { LoggerService } from '../logger.service';

@Component({
    selector: 'app-btc-exchange',
    templateUrl: './btc-exchange.component.html',
    styleUrls: ['./btc-exchange.component.css'],
    standalone: false
})
export class BtcExchangeComponent implements OnInit {

  constructor(public bitcoin: BitcoinService, public logger: LoggerService) {
    this.logger.add("BtcExchangeComponent constructed");
  }

  ngOnInit(): void {
    this.logger.add("BtcExchangeComponent initialized");
  }

  getCurrentPrice() {
    return this.bitcoin.currentPrice;
  }

  update() {
    this.bitcoin.update();
  }
}