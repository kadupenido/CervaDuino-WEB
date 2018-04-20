import { Component, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Subscription } from 'rxjs/Subscription';

import { Equipamento } from './equipamento.model';
import { EquipamentoService } from './equipamento.service';

@Component({
  selector: "app-equipamento",
  templateUrl: "./equipamento.component.html",
  styleUrls: ["./equipamento.component.scss"]
})
export class EquipamentoComponent implements OnInit, OnDestroy {

  equipamentoForm: FormGroup;
  subs: Subscription[];

  constructor(private fb: FormBuilder,
    private equipamentoService: EquipamentoService,
    private spinnerService: Ng4LoadingSpinnerService,
    private toastr: ToastsManager,
    vcr: ViewContainerRef) {

    this.toastr.setRootViewContainerRef(vcr);
    this.spinnerService.show();

    this.createForm();
    this.subs = new Array<Subscription>();
  }

  ngOnInit() {
    this.subs.push(this.equipamentoService.obterEquipamento()
      .subscribe((data: Equipamento) => {
        this.equipamentoForm.patchValue(data);
        this.spinnerService.hide();
      }, (err) => {
        this.spinnerService.hide();
        this.toastr.error(err.message);
      }));
  }

  createForm() {
    this.equipamentoForm = this.fb.group({
      hlt: this.fb.group({
        altura: ["", Validators.required],
        diametro: ["", Validators.required],
        capacidade: "",
        espacoPerdido: ["", Validators.required]
      }),
      mlt: this.fb.group({
        altura: ["", Validators.required],
        diametro: ["", Validators.required],
        capacidade: "",
        espacoPerdido: ["", Validators.required]
      }),
      bk: this.fb.group({
        altura: ["", Validators.required],
        diametro: ["", Validators.required],
        capacidade: "",
        espacoPerdido: ["", Validators.required],
        taxaEvaporacao: ""
      })
    });
  }

  onFormSubmit() {
    this.spinnerService.show();
    const equipamento: Equipamento = this.equipamentoForm.value;
    this.subs.push(this.equipamentoService.salvarEquipamento(equipamento)
      .subscribe((data: Equipamento) => {
        this.equipamentoForm.patchValue(data);
        this.spinnerService.hide();
        this.toastr.success('Equipamento salvo com sucesso');
      }, (err) => {
        this.toastr.error(err.message, 'Falha ao salvar');
      }));
  }

  ngOnDestroy() {
    this.subs.forEach(s => {
      s.unsubscribe();
    });
  }
}
