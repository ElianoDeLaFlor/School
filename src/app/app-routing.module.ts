import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentComponent } from './components/agents/agent/agent.component';
import { AgentlisteComponent } from './components/agents/agentliste/agentliste.component';
import { InterventionComponent } from './components/interventions/intervention/intervention.component';
import { InterventionlisteComponent } from './components/interventions/interventionliste/interventionliste.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: "login", pathMatch: "full" },
  { path: 'login', component: LoginComponent },

  { path: 'agent/:id', component: AgentComponent },
  { path: 'agent', component: AgentComponent },
  { path: 'agentliste', component: AgentlisteComponent },

  { path: 'intervention', component: InterventionComponent },
  { path: 'intervention/:id', component: InterventionComponent },
  { path: 'interventionliste', component: InterventionlisteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
