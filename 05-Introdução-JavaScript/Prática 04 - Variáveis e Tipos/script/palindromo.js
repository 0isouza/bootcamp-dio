var entrada, fraseInvertida=[]; // Declaração das variáveis string e array.


function verificaPalindromo(entrada){ // função que irá verificar se a frase é um palíndromo.

    let frase = entrada;

    frase = frase.replaceAll(' ', ''); // remover espaços da frase original
    frase = frase.replaceAll(',', ''); // remover vírgulas da frase original
    frase = frase.replaceAll('-', ''); // remover hífens da frase original
    frase = frase.replaceAll('.', ''); // remover pontos da frase original
    frase = frase.toLowerCase(); // substuir letras maiúsculas por minúsculas na frase original
    frase = frase.normalize('NFD').replace(/[\u0300-\u036f]/g, ""); // substituir acentos e caracteres especiais.


    for (let i = (frase.length-1);i>=0;i--){ // inverter a frase utilizando um for e array..
        fraseInvertida.push(frase[i]);
    }

    fraseInvertida = fraseInvertida.toString();            // tratar texto invertido
    fraseInvertida = fraseInvertida.replaceAll(',', '');

    console.log ("Frase original:\t\t" + frase + " (" + typeof frase + ")");
    console.log ("Frase invertida:\t" + fraseInvertida + " (" + typeof fraseInvertida + ")");

    if(frase === fraseInvertida){ // retorno da função.
        return (`\nA frase "${entrada}" é um palíndromo.\n`);
    }else return (`\nA frase "${entrada}" NÃO é um palíndromo.\n`);
}

console.log(verificaPalindromo("Socorram-me, subi no ônibus em Marrocos.")); // Output com a entrada da frase e retorno da função verificaPalindromo.