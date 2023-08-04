import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThinSliderComponent } from './thin-slider.component';

describe('ThinSliderComponent', () => {
  let component: ThinSliderComponent;
  let fixture: ComponentFixture<ThinSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThinSliderComponent]
    });
    fixture = TestBed.createComponent(ThinSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
