import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByAdresseComponent } from './by-adresse.component';

describe('ByAdresseComponent', () => {
  let component: ByAdresseComponent;
  let fixture: ComponentFixture<ByAdresseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ByAdresseComponent]
    });
    fixture = TestBed.createComponent(ByAdresseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
