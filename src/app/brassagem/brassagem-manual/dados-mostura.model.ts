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
    hlt = new Hlt();
    mlt = new Mlt();
    bk = new Bk();
    consumo = new Consumo();
    temperaturaCircuito: number;
}