import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomNumbersComponent } from './random-numbers.component';

describe('RandomNumbersComponent', () => {
  let component: RandomNumbersComponent;
  let fixture: ComponentFixture<RandomNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomNumbersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
