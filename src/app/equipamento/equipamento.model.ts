class Tank {
  altura: number;
  diametro: number;
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

class Hlt extends Tank {}

class Mlt extends Tank {}

class Bk extends Tank {
  taxaEvaporacao: number;
}

export class Equipamento {
  hlt = new Hlt();
  mlt = new Mlt();
  bk = new Bk();
}
