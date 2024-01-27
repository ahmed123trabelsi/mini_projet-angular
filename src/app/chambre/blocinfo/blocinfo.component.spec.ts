import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocinfoComponent } from './blocinfo.component';

describe('BlocinfoComponent', () => {
  let component: BlocinfoComponent;
  let fixture: ComponentFixture<BlocinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlocinfoComponent]
    });
    fixture = TestBed.createComponent(BlocinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
