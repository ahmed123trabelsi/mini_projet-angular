import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditfoyerComponent } from './editfoyer.component';

describe('EditfoyerComponent', () => {
  let component: EditfoyerComponent;
  let fixture: ComponentFixture<EditfoyerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditfoyerComponent]
    });
    fixture = TestBed.createComponent(EditfoyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
