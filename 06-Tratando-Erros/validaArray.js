
function validarArray(array, num){

    try{
        if(!array && !num){
            throw ReferenceError("Parâmetros não foram enviados!");
        }

        if(typeof(array) !== 'object'){
            throw TypeError("Este array não é um objeto.")
        }

        if(typeof(num) !== 'number'){
            throw TypeError("O parâmetro 'tamanho' inserido não é um número.")
        }

        if(array.length !== num){
            throw RangeError("Tamanho do array é diferente do parâmetro.")
        }

        return (array);
    }

    catch (e){
        if(e instanceof ReferenceError){
            console.log("ReferenceError: ", e.message);
        }
        else if(e instanceof TypeError){
            console.log("TypeError: ", e.message);
        }
        else if(e instanceof RangeError){
            console.log("RangeError: ", e.message);
        }
        else {console.log("tipo de erro não informado.")}
        
    }
}

console.log(validarArray([1,3,4,5],4));