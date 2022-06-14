
/*============================================*/

// Testar o método CALL.

const pessoa = {
    nome: "Miguel",
}

const animal = {
    nome: "cachorro",
};

function pegarAlgo(){
    console.log(this.nome);
}

pegarAlgo.call(animal);


/*============================================*/