import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { RouterModule, Routes } from '@angular/router';
import { NgxGaugeModule } from 'ngx-gauge';

import { BrassagemManualComponent } from './brassagem-manual/brassagem-manual.component';
import { BrassagemManualService } from './brassagem-manual/brassagem-manual.service';

const routes: Routes = [
  { path: 'brassagem', component: BrassagemManualComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatSliderModule,
    NgxGaugeModule,
    MatSlideToggleModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    BrassagemManualComponent
  ],
  providers: [
    BrassagemManualService
  ]
})
export class BrassagemModule { }
