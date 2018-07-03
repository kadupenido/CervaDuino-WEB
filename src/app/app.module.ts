import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { NgxElectronModule } from 'ngx-electron';

import { AppComponent } from './app.component';
import { BrassagemManualComponent } from './brassagem/brassagem-manual/brassagem-manual.component';
import { BrassagemModule } from './brassagem/brassagem.module';
import { EquipamentoModule } from './equipamento/equipamento.module';
import { ReceitasModule } from './receitas/receitas.module';

const appRoutes: Routes = [
  { path: 'brassagem/manual', component: BrassagemManualComponent },
  { path: '', component: BrassagemManualComponent },
  { path: '**', component: BrassagemManualComponent }
];

@NgModule({
  declarations: [
    AppComponent
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
    ReceitasModule,
    BrassagemModule,
    NgxElectronModule
  ],
  bootstrap: [
    AppComponent
  ],
  exports: [
    RouterModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
