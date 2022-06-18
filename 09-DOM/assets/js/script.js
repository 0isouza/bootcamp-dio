
//Definir as constantes que irão receber as consultas dos elementos. 
const botao     = document.getElementById("botao-mudar");
const body      = document.getElementsByTagName('body')[0];
const footer    = document.getElementsByTagName('footer')[0];
const titulo    = document.getElementById("titulo");


function trocarModo(){ // Callback que irá chamar as funções de troca do modo.
    alternarEstilo();
    alternarTextos();
}

function alternarEstilo(){ // Função que irá alternar o estilo da página.
    body.classList.toggle('dark-mode');
    botao.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
}

function alternarTextos(){ // Função que irá alternar o texto principal e do botão.

    if(titulo.innerHTML == "Light Mode ON"){
        titulo.innerHTML = "Dark Mode ON";
        botao.innerHTML = "Light Mode";
        return;
    } else{
        titulo.innerHTML = "Light Mode ON";
        botao.innerHTML = "Dark Mode";
    }
}

function esmaecer(){ // Caso esteja no modo escuro, o botão irá clarear. 
    if(body.classList == 'dark-mode'){
        console.log('dark mode');
        botao.classList.add('clarear');
        
    } else{  // Senão, o botão irá escurecer.
        console.log('light mode'); 
        botao.classList.add('esmaecer');
    }
}

function clarear(){ // Remover estilos aplicados.
    botao.classList.remove('esmaecer');
    botao.classList.remove('clarear');
}

botao.addEventListener("click", trocarModo); // Listener do click

botao.addEventListener("mouseover", esmaecer); // Listener do mouseove
botao.addEventListener("mouseout", clarear); // Listener do mouseout
