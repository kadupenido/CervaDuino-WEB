class Tank {
    temperatura: number;
    resistencia: boolean;
    potencia: number;
}

class Hlt extends Tank {
    setPoint: number;
}

class Mlt extends Tank {
    setPoint: number;
    recirculacao: boolean;
}

class Bk extends Tank {
}

class Consumo {
    energia: number;
    potencia: number;
    corrente: number;
}

export class DadosMostura {

    constructor() {
        this.hlt = new Hlt();
        this.hlt.resistencia = false;
        this.hlt.potencia = 0;
        this.hlt.setPoint = 0;
        this.hlt.temperatura = 0;

        this.mlt = new Mlt();
        this.mlt.resistencia = false;
        this.mlt.potencia = 0;
        this.mlt.setPoint = 0;
        this.mlt.temperatura = 0;
        this.mlt.recirculacao = false;

        this.bk = new Bk();
        this.bk.resistencia = false;
        this.bk.potencia = 0;
        this.bk.temperatura = 0;

        this.consumo = new Consumo();
        this.consumo.energia = 0;
        this.consumo.potencia = 0;
        this.consumo.corrente = 0;

        this.temperaturaCircuito = 0;
    }

    hlt: Hlt;
    mlt: Mlt;
    bk: Bk;
    consumo: Consumo;
    temperaturaCircuito: number;
}
