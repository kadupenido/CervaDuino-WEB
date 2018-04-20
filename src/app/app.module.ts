import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

import { AppComponent } from './app.component';
import { EquipamentoComponent } from './equipamento/equipamento.component';
import { EquipamentoService } from './equipamento/equipamento.service';
import { HomeComponent } from './home/home.component';
import { ReceitaComponent } from './receita/receita.component';

const appRoutes: Routes = [
  { path: 'equipamento', component: EquipamentoComponent },
  { path: "", component: HomeComponent },
  { path: "**", component: HomeComponent }
];

@NgModule({
  declarations: [AppComponent, HomeComponent, EquipamentoComponent, ReceitaComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    Ng4LoadingSpinnerModule.forRoot(),
    ToastModule.forRoot()
  ],
  providers: [
    EquipamentoService
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
