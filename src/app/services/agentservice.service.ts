import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Serviceresponse } from '../models/serviceresponse';
import { Agent } from '../models/agent';

@Injectable({
  providedIn: 'root'
})
export class AgentserviceService {

  constructor(private http: HttpClient) { }

  url = environment.Chemin;
  headers = new HttpHeaders({
    'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*',
  });

  options = { headers: this.headers };

  getAgent() {
    return this.http.get<Serviceresponse<Agent[]>>(this.url + 'agent', this.options);
  }

  getAgentById(id: number) {
    return this.http.get<Serviceresponse<Agent>>(
      this.url + "v1/agent/" + id,
      this.options
    );
  }

  deleteAgentById(id: number) {
    return this.http.delete<Serviceresponse<Agent>>(this.url + 'agent/' + id, this.options);
  }
  putAgent(agent: Agent) {
    return this.http.put<Serviceresponse<Agent>>(this.url + 'agent/' + agent.idAgent, agent, this.options);
  }
  postAgent(agent: Agent) {
    return this.http.post<Serviceresponse<Agent>>(this.url + 'agent', agent, this.options);
  }
}
