import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

import { AppComponent } from './app.component';
import { EquipamentoModule } from './equipamento/equipamento.module';
import { HomeComponent } from './home/home.component';
import { ReceitasModule } from './receitas/receitas.module';

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "**", component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    Ng4LoadingSpinnerModule.forRoot(),
    ToastModule.forRoot(),
    EquipamentoModule,
    ReceitasModule
  ],
  bootstrap: [
    AppComponent
  ],
  exports: [
    RouterModule
  ]
})
export class AppModule { }
