export class Receita {
    nome: string;
    estilo: string;
    lkg: number;
    graos: number;
    litros: number;
    rampas: [{
        temperatura: number;
        minutos: number;
    }];
    adicoes: [{
        nome: string;
        qtde: number;
        minutos: string
    }];
}
