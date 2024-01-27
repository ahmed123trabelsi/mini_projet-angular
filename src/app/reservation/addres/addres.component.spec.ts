import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddresComponent } from './addres.component';

describe('AddresComponent', () => {
  let component: AddresComponent;
  let fixture: ComponentFixture<AddresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddresComponent]
    });
    fixture = TestBed.createComponent(AddresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
