import { Equipamento } from './equipamento.model';
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EquipamentoService {

  private baseUrl = environment.baseUrl + "/equipamento";

  constructor(private http: HttpClient) {

  }

  /**
   * busca o equipamento cadastrado
   */
  obterEquipamento() {
    return this.http.get(this.baseUrl);
  }

  /**
   * Salva o equipamento
   * @param equipamento equipamento a ser salvo
   */
  salvarEquipamento(equipamento: Equipamento) {
    return this.http.post(this.baseUrl, equipamento);
  }

}
