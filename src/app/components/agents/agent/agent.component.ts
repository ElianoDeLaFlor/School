import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Agent } from 'src/app/models/agent';
import { AgentserviceService } from 'src/app/services/agentservice.service';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.scss']
})
export class AgentComponent implements OnInit {

  constructor(private activatedroute: ActivatedRoute, private agentservice: AgentserviceService) { }

  agent = new Agent();
  id: number = 0; // id when is update
  isNew: boolean = false; // let know if is an update or new save

  ngOnInit(): void {
    this.start();
  }

  onSubmit() {
    this.save(this.agent);
  }

  start() {
    this.activatedroute.paramMap.subscribe((params) => {
      if (params.has("id")) {
        // update
        this.setFormTitle('Edition de cours');
        this.isNew = false;
        this.id = +(params.get("id") + "");
        this.agentservice.getAgentById(this.id).subscribe(
          {
            next: (rslt) => { if (rslt.data) { this.agent = rslt.data } },
            error: (err) => console.error(err.message),
            complete: () => console.info('complete')
          }
        )
      } else {
        this.isNew = true;
        // creation form
      }
    });
  }

  save(agent: Agent) {
    if (!this.isNew) {
      // update
      this.updatAgent(agent);
    } else {
      // creation
      // save Agent
      this.saveAgent(agent);
    }
  }

  saveAgent(agent: Agent) {
    this.agentservice.postAgent(agent).subscribe(
      {
        next: (rslt) => {
          if (rslt.success) {
            console.info('Opération éffectuée avec succès')
          }
          else {
            console.error(rslt.message)
          }
        },
        error: (err) => console.error(err.message),
        complete: () => console.info('complete')
      }
    )
  }

  updatAgent(agent: Agent) {
    this.agentservice.putAgent(agent).subscribe(
      {
        next: (rslt) => {
          if (rslt.success) {
            console.info('Mise à jour éffectuée avec succès')
          }
          else {
            console.error(rslt.message)
          }
        },
        error: (err) => console.error(err.message),
        complete: () => console.info('complete')
      }
    )
  }

  setFormTitle(title: string) {
    const p = <HTMLParagraphElement>document.querySelector('#title');
    const btn = <HTMLButtonElement>document.querySelector('#submit');
    p.innerText = title;
    btn.innerText = 'Mofifier';
  }

}
