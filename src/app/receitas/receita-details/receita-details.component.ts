import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receita-details',
  templateUrl: './receita-details.component.html',
  styleUrls: ['./receita-details.component.scss']
})
export class ReceitaDetailsComponent implements OnInit {

  rampas = [
    { temperatura: 67, minutos: 90 },
    { temperatura: 76, minutos: 10 }
  ]

  constructor() { }

  ngOnInit() {
  }

}
