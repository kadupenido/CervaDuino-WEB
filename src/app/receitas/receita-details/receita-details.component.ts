import { Component, OnInit, ViewContainerRef, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastsManager } from 'ng2-toastr';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Subscription } from 'rxjs';

import { ReceitaService } from './../receita.service';

@Component({
  selector: 'app-receita-details',
  templateUrl: './receita-details.component.html',
  styleUrls: ['./receita-details.component.scss']
})
export class ReceitaDetailsComponent implements OnInit {

  subs: Subscription[] = [];
  idReceita: any;
  receitaForm: FormGroup;

  @ViewChild('rampaTemp') private rampaTemp: ElementRef;
  @ViewChild('rampaMin') private rampaMin: ElementRef;

  @ViewChild('adicaoNome') private adicaoNome: ElementRef;
  @ViewChild('adicaoQtde') private adicaoQtde: ElementRef;
  @ViewChild('adicaoMinutos') private adicaoMinutos: ElementRef;

  constructor(private receitasService: ReceitaService,
    private fb: FormBuilder,
    private spinnerService: Ng4LoadingSpinnerService,
    private toastr: ToastsManager,
    private vcr: ViewContainerRef,
    private route: ActivatedRoute) {
    this.toastr.setRootViewContainerRef(vcr);
    this.spinnerService.show();
    this.createForm();
  }

  ngOnInit() {
    this.spinnerService.hide();
  }

  createForm() {
    this.receitaForm = this.fb.group({
      nome: ["", Validators.required],
      estilo: ["", Validators.required],
      lkg: ["", Validators.required],
      graos: ["", Validators.required],
      litros: ["", Validators.required],
      rampas: this.fb.array([]),
      adicoes: this.fb.array([])
    });
  }

  onFormSubmit(val) {
    console.log(val);
  }

  novaRampa(temperatura: number, minutos: number) {
    const rampas = <FormArray>this.receitaForm.controls['rampas'];
    rampas.push(this.fb.group({
      temperatura: [temperatura, Validators.required],
      minutos: [minutos, Validators.required],
    }));
    this.rampaTemp.nativeElement.value = '';
    this.rampaMin.nativeElement.value = '';
  }

  removerRampa(index: number) {
    const rampas = <FormArray>this.receitaForm.controls['rampas'];
    rampas.removeAt(index);
  }

  novaAdicao(nome: string, qtde: number, minutos: number) {
    const adicao = <FormArray>this.receitaForm.controls['adicoes'];
    adicao.push(this.fb.group({
      nome: [nome, Validators.required],
      qtde: [qtde, Validators.required],
      minutos: [minutos, Validators.required]
    }));
    this.adicaoNome.nativeElement.value = '';
    this.adicaoQtde.nativeElement.value = '';
    this.adicaoMinutos.nativeElement.value = '';
  }

  removerAdicao(index: number) {
    const adicao = <FormArray>this.receitaForm.controls['adicoes'];
    adicao.removeAt(index);
  }


}
