import { Configuracao } from './configuracao.model';
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfiguracaoService {

  private baseUrl = environment.baseUrl + "/configuracao";

  constructor(private http: HttpClient) {

  }

  /**
   * busca a configuracao cadastrada
   */
  obterConfiguracao() {
    return this.http.get(this.baseUrl);
  }

  /**
   * Salva a configuracao
   * @param configuracao configuracao a ser salva
   */
  salvarConfiguracao(configuracao: Configuracao) {
    return this.http.post(this.baseUrl, configuracao);
  }

}
