import { Component, OnInit, ViewContainerRef, OnDestroy } from '@angular/core';
import { ToastsManager } from 'ng2-toastr';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Subscription } from 'rxjs';

import { ReceitaService } from './receita.service';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.scss']
})
export class ReceitasComponent implements OnInit, OnDestroy {

  subs: Subscription[] = [];
  receitas: any;

  constructor(
    private receitaService: ReceitaService,
    private spinnerService: Ng4LoadingSpinnerService,
    private toastr: ToastsManager,
    private vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
    this.spinnerService.show();
  }

  ngOnInit() {
    this.subs.push(this.receitaService.obterReceitas()
      .subscribe((data) => {
        this.receitas = data;
        this.spinnerService.hide();
      }, (err) => {
        this.spinnerService.hide();
        this.toastr.error(err.message);
      }));

  }

  ngOnDestroy() {
    this.subs.forEach(s => s.unsubscribe());
  }

}
