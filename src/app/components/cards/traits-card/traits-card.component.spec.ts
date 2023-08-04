import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitsCardComponent } from './traits-card.component';

describe('TraitsCardComponent', () => {
  let component: TraitsCardComponent;
  let fixture: ComponentFixture<TraitsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraitsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraitsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
