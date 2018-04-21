import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceitasComponent } from './receitas.component';
import { ReceitaDetailsComponent } from './receita-details/receita-details.component';
import { Routes, RouterModule } from '@angular/router';
import { ReceitaService } from './receita.service';

const receitasRoutes: Routes = [
  { path: 'receitas', component: ReceitasComponent },
  { path: 'receitas/:id', component: ReceitaDetailsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(receitasRoutes),
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
