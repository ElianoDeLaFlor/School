import { Component, OnInit } from '@angular/core';
import { Intervention } from 'src/app/models/intervention';

@Component({
  selector: 'app-intervention',
  templateUrl: './intervention.component.html',
  styleUrls: ['./intervention.component.scss']
})
export class InterventionComponent implements OnInit {

  constructor() { }
  intervention = new Intervention();

  ngOnInit(): void {
  }

  onSubmit() {

  }

}
