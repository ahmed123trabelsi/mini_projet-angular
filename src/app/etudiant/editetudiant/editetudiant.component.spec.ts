import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditetudiantComponent } from './editetudiant.component';

describe('EditetudiantComponent', () => {
  let component: EditetudiantComponent;
  let fixture: ComponentFixture<EditetudiantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditetudiantComponent]
    });
    fixture = TestBed.createComponent(EditetudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
