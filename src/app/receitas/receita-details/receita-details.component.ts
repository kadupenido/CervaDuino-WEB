import { Component, OnInit, ViewContainerRef } from '@angular/core';
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
      rampas: this.fb.array([
        this.fb.group({
          temperatura: ["", Validators.required],
          minutos: ["", Validators.required],
        })
      ]),
      adcioes: this.fb.array([
        this.fb.group({
          nome: ["", Validators.required],
          qtde: ["", Validators.required],
          minutos: ["", Validators.required]
        })
      ])
    });
  }

  onFormSubmit() {
    console.log(this.receitaForm.value)
  }

  novaRampa(temperatura: Number, minutos: Number) {
    const control = <FormArray>this.receitaForm.controls['rampas'];
    control.push(this.fb.group({
      temperatura: [temperatura, Validators.required],
      minutos: [minutos, Validators.required],
    }))
  }

}
