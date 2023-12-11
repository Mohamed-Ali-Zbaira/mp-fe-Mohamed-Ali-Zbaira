import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FideleClientComponent } from './fidele-client.component';

describe('FideleClientComponent', () => {
  let component: FideleClientComponent;
  let fixture: ComponentFixture<FideleClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FideleClientComponent]
    });
    fixture = TestBed.createComponent(FideleClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
