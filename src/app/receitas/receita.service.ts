import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { Receita } from './receita.model';


@Injectable()
export class ReceitaService {

  private baseUrl = environment.baseUrl + '/receitas';

  constructor(private http: HttpClient) { }

  /**
   * Busca as receitas cadastradas
   */
  public obterReceitas() {
    return this.http.get(this.baseUrl);
  }

  public obterReceita(id: string) {
    return this.http.get(this.baseUrl + '/' + id);
  }

  /**
   * Salva a receita
   * @param id Identificador da reiceita
   * @param receita Objeto da receita
   */
  public salvarReceita(id: string, receita: Receita) {
      return this.http.post(this.baseUrl + '/' + id, receita);
  }

}
