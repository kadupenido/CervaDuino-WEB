import { Injectable } from '@angular/core';

@Injectable()
export class ReceitaService {

  constructor() { }


  public obterReceitas() {
    return [
      { nome: 'APA do Italiano', estilo: 'American Pale ALE' },
      { nome: 'LightBeer', estilo: 'Cream ALE' }
    ];
  }

}
