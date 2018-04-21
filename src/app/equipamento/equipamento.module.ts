import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { EquipamentoComponent } from './equipamento.component';
import { EquipamentoService } from './equipamento.service';

const equipamentoRoutes: Routes = [
  { path: 'equipamento', component: EquipamentoComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(equipamentoRoutes),
    ReactiveFormsModule
  ],
  declarations: [
    EquipamentoComponent
  ],
  providers: [
    EquipamentoService
  ]
})
export class EquipamentoModule { }
