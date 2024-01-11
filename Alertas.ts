import {Poluente} from './Poluentes.ts';

export const enum NivelDoAlerta {
    NORMAL,
    ATENCAO,
    ALERTA,
    EMERGENCIA
}

export class Alerta {
    constructor(public poluente:Poluente, public quilograma_por_metro_cubico: number, public nivel: NivelDoAlerta) {
        if (quilograma_por_metro_cubico < 0) {
            throw new Error("Um alerta não pode uma quantidade negativa de poluenete");
        }
    }
}
