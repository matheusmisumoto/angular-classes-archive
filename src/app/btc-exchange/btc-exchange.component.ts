import { Component, OnInit } from '@angular/core';
import { BitcoinService } from '../bitcoin.service';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-btc-exchange',
  templateUrl: './btc-exchange.component.html',
  styleUrls: ['./btc-exchange.component.css']
})
export class BtcExchangeManualComponent implements OnInit {

  constructor(public bitcoin: BitcoinService, public logger: LoggerService) {
    this.logger.add("BtcExchangeManualComponent constructed");
  }

  ngOnInit(): void {
    this.logger.add("BtcExchangeManualComponent initialized");

    this.update();

    setInterval(
      () => {
        this.bitcoin.update();
      }
    , 60000);
  }

  getCurrentPrice() {
    return this.bitcoin.currentPrice;
  }

  update() {
    this.bitcoin.update();
  }
}