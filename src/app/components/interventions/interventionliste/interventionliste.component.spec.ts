import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterventionlisteComponent } from './interventionliste.component';

describe('InterventionlisteComponent', () => {
  let component: InterventionlisteComponent;
  let fixture: ComponentFixture<InterventionlisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterventionlisteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterventionlisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
