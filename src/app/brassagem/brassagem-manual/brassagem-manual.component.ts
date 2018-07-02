import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

import { BrassagemManualService } from './brassagem-manual.service';
import { DadosMostura } from './dados-mostura.model';

@Component({
  selector: 'app-brassagem-manual',
  templateUrl: './brassagem-manual.component.html',
  styleUrls: ['./brassagem-manual.component.scss']
})
export class BrassagemManualComponent implements OnInit {

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
    const self = this;
    setInterval(function () {
      self.brassagemService.obterDados().subscribe((dados) => {
        self.dadosMostura = dados;
      });
    }, 1000);
    this.spinnerService.hide();
  }

  public dataChanged() {
    console.log(this.dadosMostura);
  }

}
