import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoyerparuComponent } from './foyerparu.component';

describe('FoyerparuComponent', () => {
  let component: FoyerparuComponent;
  let fixture: ComponentFixture<FoyerparuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoyerparuComponent]
    });
    fixture = TestBed.createComponent(FoyerparuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
