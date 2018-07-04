import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Subscription } from 'rxjs';

import { BrassagemManualService } from './brassagem-manual.service';

@Component({
  selector: 'app-brassagem-manual',
  templateUrl: './brassagem-manual.component.html',
  styleUrls: ['./brassagem-manual.component.scss']
})
export class BrassagemManualComponent implements OnInit {

  private subs: Subscription[];
  private interval: any;

  public dadosMostura: any = {
    hlt: {
      temperatura: 0,
      setPoint: 0,
      resistencia: false
    },
    mlt: {
      temperatura: 0,
      setPoint: 0,
      resistencia: false,
      recirculacao: false,
    },
    bk: {
      resistencia: false,
      potencia: 0,
    },
    consumo: {
      energia: 0,
      potencia: 0,
      corrente: 0
    },
    temperaturaCircuito: 0,
  };

  constructor(
    private spinnerService: Ng4LoadingSpinnerService,
    private vcr: ViewContainerRef,
    private toastr: ToastsManager,
    private brassagemService: BrassagemManualService) {
    this.toastr.setRootViewContainerRef(vcr);
    this.spinnerService.show();
  }

  ngOnInit() {

    // this.subs.push(this.brassagemService.isReady().subscribe((isReady) => {

    //   if (isReady) {
    //     this.spinnerService.hide();
    //   } else {
    //     this.toastr.error('O controlador não esta pronto, tentando reconectar...', 'Falha na conexão');
    //   }

    // }));

    // const self = this;
    // setInterval(function () {
    //   self.brassagemService.obterDados().subscribe((dados) => {
    //     self.dadosMostura = dados;
    //   });
    // }, 1000);
    this.spinnerService.hide();
  }

  public dataChanged() {
    console.log(this.dadosMostura);
  }

}
