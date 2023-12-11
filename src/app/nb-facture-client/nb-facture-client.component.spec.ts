import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbFactureClientComponent } from './nb-facture-client.component';

describe('NbFactureClientComponent', () => {
  let component: NbFactureClientComponent;
  let fixture: ComponentFixture<NbFactureClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NbFactureClientComponent]
    });
    fixture = TestBed.createComponent(NbFactureClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
