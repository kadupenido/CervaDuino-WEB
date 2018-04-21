import { Subscription } from 'rxjs/Subscription';
import { ReceitaService } from './receita.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.scss']
})
export class ReceitasComponent implements OnInit {

  subs: Subscription[] = [];
  receitas: any[] = [];

  constructor(private receitaService: ReceitaService) { }

  ngOnInit() {
    this.receitas = this.receitaService.obterReceitas();
  }

}
