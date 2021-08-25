import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscDetailsComponent } from './disc-details.component';

describe('DiscDetailsComponent', () => {
  let component: DiscDetailsComponent;
  let fixture: ComponentFixture<DiscDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
