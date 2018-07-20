class Tank {
  altura: number;
  diametro: number;
  espacoPerdido: number;
  offsetTemp: number;
  get capacidade(): Number {
    if (this.altura === 0 || this.diametro === 0) {
      return 0;
    }
    return (
      Math.round(
        Math.PI * Math.pow(this.diametro / 2, 2) * this.altura / 1000 * 100
      ) / 100
    );
  }
}

class Hlt extends Tank { }

class Mlt extends Tank { }

class Bk extends Tank {
  taxaEvaporacao: number;
}

class Fermentador {
  capacidade: number;
  espacoPerdido: number;
}

export class Configuracao {
  hlt = new Hlt();
  mlt = new Mlt();
  bk = new Bk();
  fermentador = new Fermentador();
}
