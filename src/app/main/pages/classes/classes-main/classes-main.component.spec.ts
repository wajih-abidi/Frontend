import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesMainComponent } from './classes-main.component';

describe('ClassesMainComponent', () => {
  let component: ClassesMainComponent;
  let fixture: ComponentFixture<ClassesMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassesMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
