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

  lupulos = [
    { lupulo: 'Columbus', qtde: 50, minutos: 'FWH' },
    { lupulo: 'Cascade', qtde: 25, minutos: 15 },
    { lupulo: 'east kent goldings', qtde: 10, minutos: 'FlameOut' },
  ]

  constructor() { }

  ngOnInit() {
  }

}
