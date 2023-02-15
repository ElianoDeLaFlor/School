import { Component, OnInit } from '@angular/core';
import { Agent } from 'src/app/models/agent';

@Component({
  selector: 'app-agentliste',
  templateUrl: './agentliste.component.html',
  styleUrls: ['./agentliste.component.scss']
})
export class AgentlisteComponent implements OnInit {

  constructor() { }

  criteria: string = "";
  agentliste = new Array<Agent>();

  ngOnInit(): void {
  }

}
