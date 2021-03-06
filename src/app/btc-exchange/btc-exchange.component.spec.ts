import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtcExchangeComponent } from './btc-exchange.component';

describe('BtcExchangeComponent', () => {
  let component: BtcExchangeComponent;
  let fixture: ComponentFixture<BtcExchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtcExchangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtcExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
