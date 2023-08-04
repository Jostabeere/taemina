import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LooksCardComponent } from './looks-card.component';

describe('LooksCardComponent', () => {
  let component: LooksCardComponent;
  let fixture: ComponentFixture<LooksCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LooksCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LooksCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
