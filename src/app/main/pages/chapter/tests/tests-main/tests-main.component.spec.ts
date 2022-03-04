import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsMainComponent } from './tests-main.component';

describe('TestsMainComponent', () => {
  let component: TestsMainComponent;
  let fixture: ComponentFixture<TestsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestsMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
