import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditchambreComponent } from './editchambre.component';

describe('EditchambreComponent', () => {
  let component: EditchambreComponent;
  let fixture: ComponentFixture<EditchambreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditchambreComponent]
    });
    fixture = TestBed.createComponent(EditchambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
