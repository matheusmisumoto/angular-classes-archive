import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtcWalletComponent } from './btc-wallet.component';

describe('BtcWalletComponent', () => {
  let component: BtcWalletComponent;
  let fixture: ComponentFixture<BtcWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtcWalletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtcWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
