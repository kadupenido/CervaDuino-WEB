import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment.prod';


@Injectable()
export class ReceitaService {

  private baseUrl = environment.baseUrl + "/receitas";

  constructor(private http: HttpClient) { }

  public obterReceitas() {
    return this.http.get(this.baseUrl);
  }

}
