
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let numeroSecreto = generarNumeroSecreto();

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroUsuario == numeroSecreto) {
        asignarTextoElemento('p',`demoraste ${intentos} ${ (intentos === 1)?'vez':'veces' } en adivinar el numero secreto`);
        asignarTextoElemento('h1','GANASTE!');
        limpiarCaja();
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else if (numeroUsuario < numeroSecreto) {
        intentos++;
        asignarTextoElemento('p','el numero secreto es mayor');
        limpiarCaja();
    }else{
        intentos++;
        asignarTextoElemento('p','el numero secreto es menor');
        limpiarCaja();
    }

}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //si el numero generado esta incluido en la lista hacemos una operacion sino hacemos otra

    console.log("numeroGenerado",numeroGenerado);
    console.log("listaNumerosSorteados",listaNumerosSorteados);

    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','ya se jugaron todos los numeros posibles');
    }else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
   
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = "";
}

function mensajesIniciales(){
    asignarTextoElemento('h1','juego del numero secreto con parametros');

    asignarTextoElemento('p',`Adivina el numero secreto entre 1 y ${numeroMaximo} con parametros`);
}

function reiniciarJuego() {
    limpiarCaja();
    mensajesIniciales();
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

mensajesIniciales();