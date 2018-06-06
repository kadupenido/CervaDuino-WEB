import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

import { DadosMostura } from './dados-mostura.model';

@Component({
  selector: 'app-brassagem-manual',
  templateUrl: './brassagem-manual.component.html',
  styleUrls: ['./brassagem-manual.component.scss']
})
export class BrassagemManualComponent implements OnInit {

  private dadosMostura: DadosMostura;
  private socket: SocketIOClient.Socket;

  constructor() { }

  ngOnInit() {
    this.dadosMostura = new DadosMostura();
    this.dadosMostura.hlt.resistencia = true;
    this.dadosMostura.hlt.potencia = 100;
    this.dadosMostura.hlt.setPoint = 78;
    this.dadosMostura.hlt.temperatura = 76;
    this.socket = io.connect('http://192.168.1.2:3000');
    this.socket.on('data', this.dataRecived);
  }

  private dataRecived(data) { }

}
