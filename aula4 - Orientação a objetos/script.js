class contabancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    } 
    
    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = valor;
    }

    sacar(valor) {
        if(valor > this._saldo) {
            return 'Operação negada!';
        }
        this._saldo = this._saldo - valor;
        
        return this._saldo;
    }

    depositar(valor) {
        this._saldo = this._saldo + valor;

        return this._saldo;
    }
}

class contacorrente extends contabancaria { // a classe pai 'contabancaria' está ligada pelo 'extends' 
    constructor(agencia, numero, cartaocredito) {
        super(agencia, numero); // para o super ser ativado, ele precisa de uma classe pai ^
        this.tipo = 'corrente';
        this._cartaocredito = cartaocredito;
    }

    get cartaocredito() {
        return this._cartaocredito;
    }

    set cartaocredito(valor) {
        this._cartaocredito = valor;
    }
}

class contapoupanca extends contabancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'poupança';
    }
}

class contauniversitaria extends contabancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'universitária';
    }
    
    sacar(valor) {
        if(valor > 500) {
            return 'Operação negada!';
        }
    
        this._saldo = this._saldo - valor;
    }
}