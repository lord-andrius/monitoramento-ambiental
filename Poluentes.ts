class Poluente {
    private static proximoId = 0;

    public readonly id: number

    constructor(private nome:string) {
        id = proximoId++;
    }
    
    get Nome() { return this.nome}
    set Nome(value:string) { this.nome = nome }
}

class Particulas extends Poluente {
    constructor(nome:string) : {
        super(nome);
    }
}

class Quimicos extends Poluente {
    constructor(nome: string, private formula:string) {
        super(nome);
    }
    get Formula() { return this.formula}
    set Formula(value:string) { this.formula = nome }
}


