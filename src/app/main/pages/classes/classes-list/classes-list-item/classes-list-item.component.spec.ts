import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesListItemComponent } from './classes-list-item.component';

describe('ClassesListItemComponent', () => {
  let component: ClassesListItemComponent;
  let fixture: ComponentFixture<ClassesListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassesListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassesListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
