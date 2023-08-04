import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicChartGalleryComponent } from './magic-chart-gallery.component';

describe('MagicChartGalleryComponent', () => {
  let component: MagicChartGalleryComponent;
  let fixture: ComponentFixture<MagicChartGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicChartGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicChartGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
