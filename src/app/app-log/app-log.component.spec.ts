import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLogComponent } from './app-log.component';

describe('AppLogComponent', () => {
  let component: AppLogComponent;
  let fixture: ComponentFixture<AppLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
