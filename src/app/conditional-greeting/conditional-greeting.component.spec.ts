import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalGreetingComponent } from './conditional-greeting.component';

describe('ConditionalGreetingComponent', () => {
  let component: ConditionalGreetingComponent;
  let fixture: ComponentFixture<ConditionalGreetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionalGreetingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionalGreetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
