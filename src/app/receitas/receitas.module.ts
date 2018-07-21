import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ReceitaDetailsComponent } from './receita-details/receita-details.component';
import { ReceitaService } from './receita.service';
import { ReceitasComponent } from './receitas.component';

const routes: Routes = [
  { path: 'receitas', component: ReceitasComponent },
  { path: 'receitas/nova', component: ReceitaDetailsComponent },
  { path: 'receitas/detalhes/:id', component: ReceitaDetailsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [
    ReceitasComponent,
    ReceitaDetailsComponent
  ],
  providers: [
    ReceitaService
  ]
})
export class ReceitasModule { }
