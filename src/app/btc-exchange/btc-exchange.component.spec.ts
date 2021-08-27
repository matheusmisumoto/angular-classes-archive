import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtcExchangeManualComponent } from './btc-exchange.component';

describe('BtcExchangeManualComponent', () => {
  let component: BtcExchangeManualComponent;
  let fixture: ComponentFixture<BtcExchangeManualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtcExchangeManualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtcExchangeManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
