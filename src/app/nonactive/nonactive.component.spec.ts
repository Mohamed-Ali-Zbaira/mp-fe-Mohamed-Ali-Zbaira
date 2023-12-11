import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonactiveComponent } from './nonactive.component';

describe('NonactiveComponent', () => {
  let component: NonactiveComponent;
  let fixture: ComponentFixture<NonactiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NonactiveComponent]
    });
    fixture = TestBed.createComponent(NonactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
