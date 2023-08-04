import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoveInterestComponent } from './love-interest.component';

describe('LoveInterestComponent', () => {
  let component: LoveInterestComponent;
  let fixture: ComponentFixture<LoveInterestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoveInterestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoveInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
