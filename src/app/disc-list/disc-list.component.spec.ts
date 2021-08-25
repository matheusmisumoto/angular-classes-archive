import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscListComponent } from './disc-list.component';

describe('DiscListComponent', () => {
  let component: DiscListComponent;
  let fixture: ComponentFixture<DiscListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
