import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsMainComponent } from './subjects-main.component';

describe('SubjectsMainComponent', () => {
  let component: SubjectsMainComponent;
  let fixture: ComponentFixture<SubjectsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectsMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
