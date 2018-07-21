import { Component, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Subscription } from 'rxjs';

import { Configuracao } from './configuracao.model';
import { ConfiguracaoService } from './configuracao.service';

@Component({
  selector: "app-configuracao",
  templateUrl: "./configuracao.component.html",
  styleUrls: ["./configuracao.component.scss"]
})
export class ConfiguracaoComponent implements OnInit, OnDestroy {

  configuracaoForm: FormGroup;
  subs: Subscription[] = [];

  constructor(private fb: FormBuilder,
    private configuracaoService: ConfiguracaoService,
    private spinnerService: Ng4LoadingSpinnerService,
    private toastr: ToastsManager,
    private vcr: ViewContainerRef) {

    this.toastr.setRootViewContainerRef(vcr);
    this.spinnerService.show();

    this.createForm();
  }

  ngOnInit() {
    this.subs.push(this.configuracaoService.obterConfiguracao()
      .subscribe((data: Configuracao) => {
        if (data) {
          this.configuracaoForm.patchValue(data);
        }
        this.spinnerService.hide();
      }, (err) => {
        this.spinnerService.hide();
        this.toastr.error(err.message);
      }));
  }

  createForm() {
    this.configuracaoForm = this.fb.group({
      hlt: this.fb.group({
        altura: ["", Validators.required],
        diametro: ["", Validators.required],
        capacidade: "",
        espacoPerdido: ["", Validators.required],
        offsetTemp: ["", Validators.required]
      }),
      mlt: this.fb.group({
        altura: ["", Validators.required],
        diametro: ["", Validators.required],
        capacidade: "",
        espacoPerdido: ["", Validators.required],
        offsetTemp: ["", Validators.required]
      }),
      bk: this.fb.group({
        altura: ["", Validators.required],
        diametro: ["", Validators.required],
        capacidade: "",
        espacoPerdido: ["", Validators.required],
        taxaEvaporacao: "",
        offsetTemp: ["", Validators.required]
      }),
      fermentador: this.fb.group({
        capacidade: ["", Validators.required],
        espacoPerdido: ["", Validators.required]
      })
    });
  }

  onFormSubmit() {
    this.spinnerService.show();
    const configuracao: Configuracao = this.configuracaoForm.value;
    this.subs.push(this.configuracaoService.salvarConfiguracao(configuracao)
      .subscribe((data: Configuracao) => {
        this.configuracaoForm.patchValue(data);
        this.spinnerService.hide();
        this.toastr.success('Configuração salva com sucesso');
      }, (err) => {
        this.toastr.error(err.message, 'Falha ao salvar');
        this.spinnerService.hide();
      }));
  }

  ngOnDestroy() {
    this.subs.forEach(s => s.unsubscribe());
  }
}
