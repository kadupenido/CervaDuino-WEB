import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

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
    const tnkValues = {
      altura: "",
      diametro: "",
      capacidade: "",
      espacoPerdido: ""
    };

    this.equipamentoForm = this.fb.group({
      capacidade: ["", Validators.required],
      hlt: this.fb.group(tnkValues),
      mlt: this.fb.group(tnkValues),
      bk: this.fb.group({
        tnkValues,
        taxaEvaporacao: ""
      })
    });
  }
}
