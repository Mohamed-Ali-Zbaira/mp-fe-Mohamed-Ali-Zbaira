import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonActiveClientsComponent } from './non-active-clients.component';

describe('NonActiveClientsComponent', () => {
  let component: NonActiveClientsComponent;
  let fixture: ComponentFixture<NonActiveClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NonActiveClientsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NonActiveClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
