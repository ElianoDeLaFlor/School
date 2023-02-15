import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AgentComponent } from './components/agents/agent/agent.component';
import { AgentlisteComponent } from './components/agents/agentliste/agentliste.component';
import { InterventionComponent } from './components/interventions/intervention/intervention.component';
import { InterventionlisteComponent } from './components/interventions/interventionliste/interventionliste.component';
import { FormsModule } from '@angular/forms';
import { AgentserviceService } from './services/agentservice.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AgentComponent,
    InterventionComponent,
    AgentlisteComponent,
    InterventionlisteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AgentserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
