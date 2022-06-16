

class ContaBancaria { // Criar classe ContaBancaria

    constructor(agencia, numero, tipo){
        
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0; // Saldo, privado. Inicializado como zero.

    }

    get saldo() { // Getter de saldo, retorna a consulta do saldo atual.
        return this._saldo;
    }

    set saldo(valor){ // Setter de saldo, atualiza o saldo com o valor passado.
        this._saldo = valor;
    }

    depositar (vlrDeposito) { // Método que irá acrescentar o valor de vlrDeposito ao saldo.
        this.saldo = this.saldo + vlrDeposito;
    }

    sacar (vlrSaque){ // Método que irá retirar o valor de vlrSaque do saldo.
        this.saldo = this.saldo - vlrSaque;
    }

    consultar (retorno){ // Retornar o saldo atualizado, arredondado em duas casas decimais.
        retorno = this.saldo;
        console.log('\nSaldo atualizado: R$ ' + retorno.toFixed(2) + '\n');
    }
}

class ContaCorrente extends ContaBancaria{
    constructor (agencia, numero, cartaoCredito){
        super(agencia, numero);

        this.tipo = 'conta corrente'
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){ // Getter do cartaoCredito
        return this._cartaoCredito;
    }

    set cartaoCredito(valor){ // Setter do cartaoCredito
        this.cartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor (agencia, numero){
        super(agencia, numero);

        this.tipo = 'conta pupança';
    }
}


class ContaUniversitaria extends ContaBancaria{
    constructor (agencia, numero){
        super(agencia, numero);

        this.tipo = 'conta universitária';
    }

    sacar (vlrSaque){
        if(vlrSaque > 500) {
            console.log('saque: ' + vlrSaque)
            return 'Operação negada.';
        }

        this.saldo = this.saldo - vlrSaque;
    }

}


ContaBancaria = new ContaBancaria(); // Instanciar a classe ContaBancária
//ContaUniversitaria = new ContaUniversitaria(); // Instanciar a classe ContaUniversitaria

console.log('Bem vind@ ao IgoBank')

// ContaCorrente = new ContaCorrente(); // Instanciar a classe ContaCorrente
// ContaPoupanca = new ContaPoupanca(); // Instanciar a classe ContaPoupanca

