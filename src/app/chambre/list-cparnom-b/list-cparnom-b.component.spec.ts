import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCparnomBComponent } from './list-cparnom-b.component';

describe('ListCparnomBComponent', () => {
  let component: ListCparnomBComponent;
  let fixture: ComponentFixture<ListCparnomBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListCparnomBComponent]
    });
    fixture = TestBed.createComponent(ListCparnomBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
