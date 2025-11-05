const visor = document.getElementById("resultado");

function insert(num) {

    let numero = visor.textContent;

    visor.innerHTML = numero + num;
};

function clean() {
    
    visor.innerHTML = "";

}

function back() {
    
    let numeroVisor = visor.innerHTML;

    visor.innerHTML = numeroVisor.substring(0, numeroVisor.length -1)

}

function calcular() {
    
    let numeroVisor = visor.textContent;

    visor.innerHTML = eval(numeroVisor)

}
