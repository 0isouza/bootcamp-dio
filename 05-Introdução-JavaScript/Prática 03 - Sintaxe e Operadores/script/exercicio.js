var a,b,saida; //Declaração das variáveis globais

function comparaNumeros(a,b){

    var frase1, frase2, frase3, frase4; //Declaração das variáveis locais

    frase1 = a === b ? " são iguais. Sua soma é " : " NÃO são iguais. Sua soma é ";
    frase2 = a+b;
    
    // Checa se é maior, menor ou igual a 10
        if (frase2 > 10) {
            frase3 = ", que é maior que 10 e "
        }
        
        else if (frase2 < 10) {
            frase3 = ", que é menor que 10 e "
        } else (frase3 = ", que é igual a 10 e ");
    
    // Checa se é maior, menor ou igual a 20
        if (frase2 > 20) {
            frase4 = "maior que 20."
        }
        else if (frase2 < 20) {
            frase4 = "menor que 20."
        } else (frase4 = "igual a 20.");

    // Retornar saída concatenada
        saida = ("Os números "+a+" e "+b + frase1 + frase2 + frase3 + frase4);

    return saida;
}

console.log(comparaNumeros(1,1));
console.log(comparaNumeros(1,2));
console.log(comparaNumeros(5,5));
console.log(comparaNumeros(5,6));
console.log(comparaNumeros(10,10));
console.log(comparaNumeros(10,11));
console.log(comparaNumeros(30,30));