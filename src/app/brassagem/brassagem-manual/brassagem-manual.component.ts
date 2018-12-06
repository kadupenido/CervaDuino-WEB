import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-brassagem-manual',
  templateUrl: './brassagem-manual.component.html',
  styleUrls: ['./brassagem-manual.component.scss']
})
export class BrassagemManualComponent implements OnInit {

  private socket: SocketIOClient.Socket;

  public time: string = "00:00:00";
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
      resfriamento: false,
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
    private toastr: ToastsManager) {
    this.toastr.setRootViewContainerRef(vcr);
    this.spinnerService.show();
  }

  ngOnInit() {

    try {

      this.socket = io.connect('http://localhost:3000');

      this.socket.on('connect', () => {

        this.socket.on('hltTemp', (temp: number) => {
          this.dadosMostura.hlt.temperatura = temp;
        });

        this.socket.on('mltTemp', (temp: number) => {
          this.dadosMostura.mlt.temperatura = temp;
        });

        this.socket.on('bkTemp', (temp: number) => {
          this.dadosMostura.bk.temperatura = temp;
        });

        this.socket.on('currentData', (data) => {
          this.dadosMostura.consumo.energia = data.consumption;
          this.dadosMostura.consumo.potencia = data.power;
          this.dadosMostura.consumo.corrente = data.current;
        });

        this.spinnerService.hide();
        this.toastr.success('Conexão estabelecida...', 'Conectado');

      });

      this.socket.on('disconnect', () => {
        this.spinnerService.show();
        this.toastr.error('Desconectado.', 'Falha');
      });

    } catch (error) {
      this.spinnerService.hide();
      this.toastr.error(error, 'Falha');
    }
  }

  public hltSetPoint() {
    this.socket.emit('hltSetPoint', this.dadosMostura.hlt.setPoint);
  }

  public hltResistencia() {
    this.socket.emit('hltResistencia', this.dadosMostura.hlt.resistencia);
  }

  public mltSetPoint() {
    this.socket.emit('mltSetPoint', this.dadosMostura.mlt.setPoint);
  }

  public mltResistencia() {
    this.socket.emit('mltResistencia', this.dadosMostura.mlt.resistencia);
  }

  public mltRecirculacao() {
    this.socket.emit('mltRecirculacao', this.dadosMostura.mlt.recirculacao);
  }

  public bkResistencia() {
    this.socket.emit('bkResistencia', this.dadosMostura.bk.resistencia);
  }

  public bkPotencia() {
    this.socket.emit('bkPotencia', this.dadosMostura.bk.potencia);
  }

  public bkResfriamento() {
    this.socket.emit('bkResfriamento', this.dadosMostura.bk.resfriamento);
  }

}
