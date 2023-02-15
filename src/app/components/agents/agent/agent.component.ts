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

  agent?= new Agent();
  id: number = 0; // id when is update
  isNew: boolean = false; // let know if is an update or new save

  ngOnInit(): void {
    this.start();
  }

  onSubmit() {

  }

  start() {
    this.activatedroute.paramMap.subscribe((params) => {
      if (params.has("id")) {
        // update
        this.setFormTitle('Edition de cours');
        this.isNew = false;
        this.id = +(params.get("id") + "");
        this.agentservice.getAgentById(this.id).pipe().subscribe((rslt) => {
          this.agent = rslt.data;
        }, ((err: any) => {
          console.log(err.message);
        }), () => {

        })
      } else {
        this.isNew = true;
        // creation form
      }
    });
  }

  setFormTitle(title: string) {
    const p = <HTMLParagraphElement>document.querySelector('#title');
    const btn = <HTMLButtonElement>document.querySelector('#submit');
    p.innerText = title;
    btn.innerText = 'Mofifier';
  }

}
