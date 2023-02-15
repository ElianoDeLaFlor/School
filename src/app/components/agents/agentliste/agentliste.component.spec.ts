import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentlisteComponent } from './agentliste.component';

describe('AgentlisteComponent', () => {
  let component: AgentlisteComponent;
  let fixture: ComponentFixture<AgentlisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentlisteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentlisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
