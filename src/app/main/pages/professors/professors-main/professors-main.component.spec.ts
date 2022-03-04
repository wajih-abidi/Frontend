import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorsMainComponent } from './professors-main.component';

describe('ProfessorsMainComponent', () => {
  let component: ProfessorsMainComponent;
  let fixture: ComponentFixture<ProfessorsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorsMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
