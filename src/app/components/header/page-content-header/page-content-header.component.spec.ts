import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageContentHeaderComponent } from './page-content-header.component';

describe('PageContentHeaderComponent', () => {
  let component: PageContentHeaderComponent;
  let fixture: ComponentFixture<PageContentHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageContentHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageContentHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
