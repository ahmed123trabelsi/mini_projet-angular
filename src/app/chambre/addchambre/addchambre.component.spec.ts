import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddchambreComponent } from './addchambre.component';

describe('AddchambreComponent', () => {
  let component: AddchambreComponent;
  let fixture: ComponentFixture<AddchambreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddchambreComponent]
    });
    fixture = TestBed.createComponent(AddchambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
