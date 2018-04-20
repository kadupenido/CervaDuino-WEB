import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Equipamento } from "./equipamento";
import { map } from "rxjs/operators";

@Component({
  selector: "app-equipamento",
  templateUrl: "./equipamento.component.html",
  styleUrls: ["./equipamento.component.scss"]
})
export class EquipamentoComponent implements OnInit {
  equipamentoForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {}

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
    //this.equipamentoForm.valueChanges.map(this.formUpdated);
  }

  onFormSubmit() {
    const equip: Equipamento = this.equipamentoForm.value;
    //equip.hlt.altura = 36;
    //equip.hlt.diametro = 34;
    console.log(equip.hlt.capacidade);
  }

  formUpdated(val) {}
}
