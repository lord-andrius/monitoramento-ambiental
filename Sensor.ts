import {Poluente} from './Poluentes.ts';
import {Alerta, NivelDoAlerta} from './Alertas.ts';

class Sensor {
    constructor(public nome: string, public readonly poluente: Poluente, public readonly receptor: IReceptor,  private nivelNomal: number, private nivelAtencao: number, private nivelAlerta: number, private nivelEmergencia:number, public enviarAlertasNormais:bool = false) {
        if (nivelNormal == 0 || nivelAtencao == 0 || nivelAlerta == 0 || nivelEmergencia == 0 || !(nivelNormal < nivelAtencao && nivelAtencao < nivelAlerta && nivelAlerta < nivelEmergencia)) {
            throw new Error("Valor inválido");
        }
    } 


    get NivelNormal() {
        return this.nivelNormal;
    }

    get NivelAtencao() {
        return this.nivelAtencao;
    }

    get NivelAlerta() {
        return this.nivelAlerta;
    }

    get NivelEmergencia() {
        return this.nivelEmergencia;
    }

    set NivelNormal(value:number) {
        if (number < 0) throw Error("Valor inválido");
        this.nivelNormal = value;
    }

    set NivelNormal(value:number) {
            if (number < 0) throw Error("Valor inválido");
            this.nivelNormal = value;
    }
    set NivelAtencao(value:number) {
            if (number < 0) throw Error("Valor inválido");
            this.nivelAtencao = value;
    }

    set NivelAlerta(value:number) {
            if (number < 0) throw Error("Valor inválido");
            this.nivelAlerta = value;
    }
        
    set NivelEmergencia(value:number) {
            if (number < 0) throw Error("Valor inválido");
            this.nivelEmergencia = value;
    }

    private classificarLeitura(quantidade: number): NivelDoAlerta {
           if (quantidade < this.nivelAtencao)
               return NivelDoAlerta.NORMAL;
           else if (quantidade < this.nivelAlerta)
               return NivelDoAlerta.ATENCAO;
           else if (quantidade < this.nivelEmergencia)
               return NivelDoAlerta.ALERTA;
           else
               return NivelDoAlerta.EMERGENCIA;
    }

    public ler(poluente: Poluente, quantidade: number) {
            if (quantidade < 0) throw Error("Valor inválido");
            if (poluente.id != this.poluente.id) return;

            const nivelDoAlerta = classificarLeitura(quantidade);
                if (nivelDoAlerta == NivelDoAlerta.NORMAL)
                    if (enviarAlertasNormais) recptor.receber(new Alerta(poluente, quantidade, nivelDoAlerta));
                else
                    recptor.receber(new Alerta(poluente, quantidade, nivelDoAlerta));
            }
}
