import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditresComponent } from './editres.component';

describe('EditresComponent', () => {
  let component: EditresComponent;
  let fixture: ComponentFixture<EditresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditresComponent]
    });
    fixture = TestBed.createComponent(EditresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
