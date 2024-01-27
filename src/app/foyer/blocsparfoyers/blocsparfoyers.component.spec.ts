import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocsparfoyersComponent } from './blocsparfoyers.component';

describe('BlocsparfoyersComponent', () => {
  let component: BlocsparfoyersComponent;
  let fixture: ComponentFixture<BlocsparfoyersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlocsparfoyersComponent]
    });
    fixture = TestBed.createComponent(BlocsparfoyersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
