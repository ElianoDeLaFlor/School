import { Component, OnInit } from '@angular/core';
import { Agent } from 'src/app/models/agent';
import { AgentserviceService } from 'src/app/services/agentservice.service';

@Component({
  selector: 'app-agentliste',
  templateUrl: './agentliste.component.html',
  styleUrls: ['./agentliste.component.scss']
})
export class AgentlisteComponent implements OnInit {

  constructor(private agentservice: AgentserviceService) { }

  criteria: string = "";
  agentliste = new Array<Agent>();

  ngOnInit(): void {
    this.getAgentListe();
  }

  getAgentListe() {
    this.agentservice.getAgent().subscribe({
      next: (rslt) => {
        if (rslt.success) {
          if (rslt.data) {
            this.agentliste = rslt.data;
          } else {
            console.error(rslt.message)
          }
        } else {
          this.agentliste = [];
          console.error(rslt.message)
        }
      },
      error: (err) => { console.error(err.message) },
      complete: () => { console.info("Complete") }
    })
  }

  delete(id: number) {
    this.agentservice.deleteAgentById(id).subscribe({
      next: (rslt) => {
        console.log("deleted item", rslt.data);
        confirm("Opération éffectuée avec succès");
      },
      error: (err) => { console.error(err.message) },
      complete: () => { console.info("Complete") }
    })
  }

}
