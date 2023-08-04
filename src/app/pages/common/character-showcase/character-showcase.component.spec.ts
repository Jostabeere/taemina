import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterShowcaseComponent } from './character-showcase.component';

describe('CharacterShowcaseComponent', () => {
  let component: CharacterShowcaseComponent;
  let fixture: ComponentFixture<CharacterShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterShowcaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
