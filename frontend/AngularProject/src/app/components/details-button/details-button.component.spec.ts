import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsButtonComponent } from './details-button.component';

describe('DetailsButtonComponent', () => {
  let component: DetailsButtonComponent;
  let fixture: ComponentFixture<DetailsButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsButtonComponent]
    });
    fixture = TestBed.createComponent(DetailsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
