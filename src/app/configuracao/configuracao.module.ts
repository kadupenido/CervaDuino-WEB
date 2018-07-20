import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ConfiguracaoComponent } from './configuracao.component';
import { ConfiguracaoService } from './configuracao.service';

const routes: Routes = [
  { path: 'configuracao', component: ConfiguracaoComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [
    ConfiguracaoComponent
  ],
  providers: [
    ConfiguracaoService
  ]
})
export class ConfiguracaoModule { }
