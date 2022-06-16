

class ContaBancaria { // Criar classe ContaBancaria
    constructor(agencia, numero, tipo, saldo){ // Parâmetros agencia, numero, tipo e saldo;
        
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this.saldo = saldo;

    }

    get int() { // Getter de saldo, retorna o valor atual do saldo.
        return this.saldo;
    }

    set int(valor){ // Setter de saldo, atualiza o saldo com o valor passado.
        this.saldo = valor;
    }

    depositar (vlrDeposito) { // Método que irá acrescentar o valor de vlrDeposito ao saldo.
        console.log ('Valor depositado: R$ ' + vlrDeposito);
        this.int = vlrDeposito + this.int;
        console.log ('Saldo atualizado: R$ ' + this.saldo + '\n');
    }

    sacar (vlrSaque){ // Método que irá retirar o valor de vlrSaque do saldo.
        console.log ('Valor sacado: R$ ' + vlrSaque);
        this.int = this.saldo - vlrSaque;
        console.log ('Saldo atualizado: R$ ' + this.saldo + '\n');
    }


}

ContaBancaria = new ContaBancaria(); // Instanciar a classe ContaBancária
ContaBancaria.saldo = 0;



ContaBancaria.depositar(100);
ContaBancaria.depositar(100);
ContaBancaria.sacar(50)