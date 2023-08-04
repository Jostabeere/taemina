import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalityCardComponent } from './personality-card.component';

describe('PersonalityCardComponent', () => {
  let component: PersonalityCardComponent;
  let fixture: ComponentFixture<PersonalityCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalityCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
