var entrada=[];

function substituirPares(entrada){

    if (!entrada.length) return -1; // Se o array for vazio, retornar -1.

    console.log(`Input:\t[${entrada}]`); // Imprime entrada original.

    for (let i=0;i<=(entrada.length -1);i++){ //Validar se o número é par e substituir caso positivo.
        if(entrada[i] % 2 === 0 ){
            entrada[i] = 0
        }
    }
    return (`Output:\t[${entrada}]`); // Imprime saída modificada.
}

console.log(substituirPares([2, 3, 4, 5, 1, 80]));