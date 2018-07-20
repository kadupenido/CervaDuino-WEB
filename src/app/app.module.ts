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
import { BrassagemModule } from './brassagem/brassagem.module';
import { ConfiguracaoModule } from './configuracao/configuracao.module';
import { ReceitasModule } from './receitas/receitas.module';

const appRoutes: Routes = [
  { path: '', redirectTo: 'brassagem', pathMatch: 'full' },
  { path: '**', redirectTo: 'brassagem', pathMatch: 'full' }
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
    ConfiguracaoModule,
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
