import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from './../../../environments/environment.prod';

@Injectable()
export class BrassagemManualService {

  private baseUrl = environment.baseUrl + "/board";

  constructor(private http: HttpClient) { }


  /**
   * Busca os dados do equipamento
   */
  obterDados() {
    return this.http.get(this.baseUrl);
  }

  /**
   * Verifica se a placa esta pronta
   */
  isReady() {
    return this.http.get(this.baseUrl + '/isReady');
  }

}
