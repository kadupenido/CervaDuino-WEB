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
    this.dadosMostura = new DadosMostura();
    this.spinnerService.hide();
  }

  public dataChanged() {
    console.log(this.dadosMostura);
  }

}
