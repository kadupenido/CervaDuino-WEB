import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import * as io from 'socket.io-client';

import { DadosMostura } from './dados-mostura.model';

@Component({
  selector: 'app-brassagem-manual',
  templateUrl: './brassagem-manual.component.html',
  styleUrls: ['./brassagem-manual.component.scss']
})
export class BrassagemManualComponent implements OnInit {

  public dadosMostura: DadosMostura;
  private socket: SocketIOClient.Socket;

  constructor(
    private spinnerService: Ng4LoadingSpinnerService,
    private vcr: ViewContainerRef,
    private toastr: ToastsManager) {
      this.toastr.setRootViewContainerRef(vcr);
      this.spinnerService.show();
  }

  ngOnInit() {
    this.socket = io.connect('http://localhost:3000');
    this.socket.on('data', this.dataRecived);
    this.socket.on('connect', () => this.socketConnected(this.spinnerService, this.toastr));
    this.socket.on('connect_error', (err) => this.socketError(err, this.toastr));
    this.socket.on('reconnect_attempt', (attemptNumber) => this.socketReconnectAttempt(attemptNumber, this.spinnerService, this.toastr));

    this.dadosMostura = new DadosMostura();
  }

  private dataRecived(data) {
    this.dadosMostura = data;
  }

   private socketConnected(spinnerService: Ng4LoadingSpinnerService, toastr: ToastsManager) {
    spinnerService.hide();
    toastr.success('Conexão estabelecida');
   }

   private socketError(error, toastr: ToastsManager) {
     toastr.error(error.message, 'Falha ao conectar');
   }

   private socketReconnectAttempt(attemptNumber: number, spinnerService: Ng4LoadingSpinnerService, toastr: ToastsManager) {
      spinnerService.show();
      toastr.info('Tentativa: ' + attemptNumber, 'Reconectando');
   }

   public dataChanged() {
      console.log(this.dadosMostura);
      this.socket.emit('data', this.dadosMostura);
   }

}
